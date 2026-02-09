import knowledge from "../data/knowledge.json";

type AnyRecord = Record<string, any>;

const normalize = (s: string) =>
  (s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const includesAny = (text: string, list: string[]) => {
  const t = normalize(text);
  return list.some((k) => t.includes(normalize(k)));
};

const getContactLines = (kb: AnyRecord) => {
  // Supports kb.contact = { email, linkedin, github, website }
  const contact = (kb.contact ?? {}) as AnyRecord;

  const emailRaw = (contact.email ?? "").toString(); // can be "mailto:..." or plain email
  const email = emailRaw.startsWith("mailto:") ? emailRaw.replace("mailto:", "") : emailRaw;

  const linkedin = (contact.linkedin ?? "").toString();
  const github = (contact.github ?? "").toString();
  const website = (contact.website ?? "").toString();

  const lines: string[] = [];
  if (email) lines.push(`• 📧 Email: ${email}`);
  if (linkedin) lines.push(`• 💼 LinkedIn: ${linkedin}`);
  if (github) lines.push(`• 🧑‍💻 GitHub: ${github}`);
  if (website) lines.push(`• 🌐 Website: ${website}`);

  return lines;
};

export function getPortfolioAnswer(userInput: string): string {
  const q = normalize(userInput);
  const kb = knowledge as unknown as AnyRecord;
  const faq: Array<{ q: string; a: string }> = kb.faq ?? [];
  const designFaq = faq.find((f) => normalize(f.q) === "ehr design");

  // 0) Contact intent (early)
  if (includesAny(q, ["contact", "reach", "email", "linkedin", "github", "connect", "message"])) {
    // Specific link intents
    if (includesAny(q, ["linkedin"])) {
      return "Connect with me on <a href='https://www.linkedin.com/in/srushtimadhure' target='_blank' class='text-[#1E3A5F] underline'>LinkedIn</a>.";
    }
    if (includesAny(q, ["github"])) {
      return "See my code on <a href='https://github.com/srushtismadhure' target='_blank' class='text-[#1E3A5F] underline'>GitHub</a>.";
    }
    if (includesAny(q, ["email"])) {
      return "Email me directly at <a href='mailto:srushtisunilmadhure@gmail.com' class='text-[#1E3A5F] underline'>srushtisunilmadhure@gmail.com</a>.";
    }
    if (includesAny(q, ["resume"])) {
      return "Download my resume <a href='/resume.pdf' target='_blank' class='text-[#1E3A5F] underline'>here</a>.";
    }
    if (includesAny(q, ["projects"])) {
      return "Browse my work in the <a href='/#/projects' class='text-[#1E3A5F] underline'>Projects section</a>.";
    }

    const contactLines = getContactLines(kb);
    if (contactLines.length) {
      return `Absolutely, here’s the best way to reach me:\n\n${contactLines.join(
        "\n"
      )}\n\nIf you share what you’re looking for (role, project, collaboration), I can point you to the most relevant work too.`;
    }
    return `Absolutely, you can reach me via the Contact section in the left nav, or through my LinkedIn/GitHub links in the Profile Overview.`;
  }

  // 0c) Portfolio design intent (why it looks like an EHR)
  if (
    includesAny(q, [
      "ehr design",
      "designed like an ehr",
      "portfolio design",
      "design of your portfolio",
      "portfolio this way",
      "designed my portfolio",
      "why this design",
      "electronic health record",
      "ehr style",
      "clinical theme",
      "hospital interface",
      "clinical workflow ui"
    ])
  ) {
    if (designFaq?.a) return `Sure, ${designFaq.a}`;
    return "I designed the portfolio to feel like an EHR so you can see the workflow pain points clinicians handle daily.";
  }

  // 0b) Simple "yes" intent -> surface projects with links
  if (includesAny(q, ["yes", "yeah", "yep", "sure", "okay", "ok"])) {
    const projects: Array<AnyRecord> = kb.projects ?? [];
    if (projects.length) {
      const lines = projects.map((p) => {
        const name = (p.name ?? "").toString();
        const desc = (p.one_liner ?? p.summary ?? "Project details are available in the case study.").toString();
        const href = (p.links?.case_study ?? "").toString();
        const link = href
          ? `<a href='${href}' class='text-[#1E3A5F] underline' target='_blank'>${name}</a>`
          : name;
        return `• ${link} — ${desc}`;
      });
      return `Here are a few projects to explore:\n\n${lines.join("\n")}`;
    }
  }

  // 1) "What can you solve?" / capabilities intent (NEW)
  if (
    includesAny(q, [
      "help",
      "solve",
      "problems",
      "problem",
      "specialize",
      "expertise",
      "what can you do",
      "what do you work on",
      "how do you help",
      "services",
      "capabilities",
      "what can you solve",
      "what do you build"
    ])
  ) {
    return `Here’s the kind of work I usually do in healthcare data + product:\n\n• Clean and structure messy EHR, claims, and SDOH data\n•  Analyze trends to uncover cost drivers, risk gaps, and workflow bottlenecks\n•  Build predictive models to identify high-risk patients and non-adherence risks\n•  Use NLP to extract signals from clinical notes, messages, and survey free text\n•  Design ETL pipelines + data models so analytics are reliable and reusable\n•  Build dashboards that translate insights into decisions clinicians and operators can act on\n\nIf you tell me your goal (reduce readmissions, improve adherence, identify gaps in care, etc.), I can point you to the most relevant project.`;
  }

  // 2) FAQ exact/near match
  const faqHit = faq.find((f) => {
    const fq = normalize(f.q);
    return fq === q || (fq.length > 0 && q.includes(fq));
  });
  if (faqHit?.a) return `Sure, ${faqHit.a}`;

  // 3a) Core skills catch-all (handles slight typos like "core skils")
  if (includesAny(q, ["core skill", "core skills", "skills", "core strength"])) {
    const coreEntry = faq.find((f) => normalize(f.q) === "what are your core skills");
    if (coreEntry?.a) return `Sure, ${coreEntry.a}`;
  }

  // 3) Project match by name/keywords
  const projects: Array<AnyRecord> = kb.projects ?? [];
  for (const p of projects) {
    const name = (p.name ?? "").toString();
    const summary = (p.summary ?? "").toString();
    const oneLiner = (p.one_liner ?? "").toString();
    const role = (p.role ?? "").toString();
    const keywords: string[] = Array.isArray(p.keywords) ? p.keywords : [];

    const normalizedName = normalize(name);
    const body = summary || oneLiner || "Project details are available in the case study.";

    // Name match
    if (normalizedName && q.includes(normalizedName)) {
      return `Here’s a quick overview of **${name}**:\n\n${body}\n\nWant the full case study or key highlights?`;
    }

    // Keyword match
    if (keywords.length && includesAny(q, keywords)) {
      return `That sounds like one of my projects: **${name}**:\n\n${body}\n\nIf you tell me what you care about (NLP, dashboards, UX, prediction), I’ll tailor the details.`;
    }

    // (kept from your original logic) keywords against additional text
    const hay = normalize([name, summary, oneLiner, role].join(" "));
    if (hay && keywords.length && includesAny(q, keywords)) {
      return `I think you’re pointing to **${name}**:\n\n${body}`;
    }
  }

  // 4) Friendly fallback
  return `Hey, I can help you explore my portfolio 👇\n\n• Projects (PainTools, predictive analytics, dashboards)\n• What I can help solve (NLP, modeling, pipelines)\n• Skills & tech stack\n• Contact info\n\nTry asking:\n• "What problems can you solve?"\n• "Tell me about PainTools"\n• "What are your core skills?"\n• "How can I contact you?"`;
}
