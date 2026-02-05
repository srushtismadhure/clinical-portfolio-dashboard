import knowledge from "../data/knowledge.json";
import { getPortfolioAnswer } from "../chatbot/answer";

export function knowledgeCheck() {
  console.log("✅ knowledge loaded:", knowledge);
  console.log("Owner:", knowledge?.owner?.name);
  console.log("Projects:", knowledge?.projects?.length);
  console.log("QA test (faq):", getPortfolioAnswer("what do you do"));
  console.log("QA test (project):", getPortfolioAnswer("Tell me about PainTools"));
  console.log("QA test (skill):", getPortfolioAnswer("SQL"));
}
