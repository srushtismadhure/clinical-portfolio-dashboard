import knowledge from "../data/knowledge.json";

type AnyRecord = Record<string, any>;

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const includesAny = (text: string, list: string[]) => {
  const t = normalize(text);
  return list.some((k) => t.includes(normalize(k)));
};

export function getPortfolioAnswer(userInput: string): string {
  const q = normalize(userInput);
  const kb = knowledge as unknown as AnyRecord;

  // 1) FAQ exact/near match
  const faq: Array<{ q: string; a: string }> = kb.faq ?? [];
  const faqHit = faq.find((f) => normalize(f.q) === q || q.includes(normalize(f.q)));
  if (faqHit?.a) return faqHit.a;

  // 2) Project match by name/keywords
  const projects: Array<AnyRecord> = kb.projects ?? [];
  for (const p of projects) {
    const name = p.name ?? "";
    const keywords: string[] = p.keywords ?? [];
    const hay = [name, p.summary ?? "", p.one_liner ?? "", p.role ?? ""].join(" ");
    if (normalize(name) && q.includes(normalize(name))) {
      return `${name}: ${p.summary ?? p.one_liner ?? "Project details available."}`;
    }
    if (keywords.length && includesAny(q, keywords)) {
      return `${name}: ${p.summary ?? p.one_liner ?? "Project details available."}`;
    }
    if (hay && includesAny(q, keywords)) {
      return `${name}: ${p.summary ?? p.one_liner ?? "Project details available."}`;
    }
  }

  // 3) Skills match
  const skills: Array<any> = kb.skills ?? [];
  const skillStrings: string[] = skills.map((s) => (typeof s === "string" ? s : s?.name)).filter(Boolean);
  const skillHit = skillStrings.find((s) => q.includes(normalize(s)));
  if (skillHit) {
    return `Core skill: ${skillHit}. Want projects using it? Ask: "projects using ${skillHit}".`;
  }

  // 4) Fallback
  return `I can answer about Projects, Skills, and Contact.\nTry: "Tell me about PainTools", "What are your core skills?", "How can I contact you?"`;
}
