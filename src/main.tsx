import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { knowledgeCheck } from "./dev/knowledgeCheck";
knowledgeCheck();

if (typeof window !== "undefined" && window.location.search.includes("utm_")) {
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, document.title, url.toString());
}

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
