import knowledge from "../data/knowledge.json";

export type Suggestion = { label: string; kind: "faq" | "project" | "skill" };

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function getSuggestions(input: string): Suggestion[] {
  const term = normalize(input);
  if (term.length < 2) return [];

  const kb: any = knowledge;
  const faq: Suggestion[] =
    kb.faq?.map((f: any) => ({ label: f.q, kind: "faq" as const })) ?? [];
  const projects: Suggestion[] =
    kb.projects?.map((p: any) => ({ label: p.name, kind: "project" as const })) ?? [];
  const skills: Suggestion[] =
    kb.skills
      ?.map((s: any) => (typeof s === "string" ? s : s?.name))
      ?.filter(Boolean)
      ?.map((label: string) => ({ label, kind: "skill" as const })) ?? [];

  const all = [...faq, ...projects, ...skills];

  const scored = all
    .map((s) => {
      const norm = normalize(s.label);
      let score = 0;
      if (norm.startsWith(term)) score += 3;
      else if (norm.includes(term)) score += 1;
      return { s, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.s);

  return scored;
}
