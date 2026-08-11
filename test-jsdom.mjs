import { JSDOM } from 'jsdom';
import fs from 'fs';

// Read the index.html from dist
const html = fs.readFileSync('dist/index.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3000/"
});

dom.window.console.error = (...args) => console.log('BROWSER ERROR:', ...args);
dom.window.console.warn = (...args) => console.log('BROWSER WARN:', ...args);
dom.window.console.log = (...args) => console.log('BROWSER LOG:', ...args);

// Mock matchMedia to simulate Mobile
dom.window.matchMedia = (query) => {
  return {
    matches: query === '(max-width: 768px)',
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
};

setTimeout(() => {
  console.log("Root HTML:", dom.window.document.getElementById('root').innerHTML.substring(0, 500));
  process.exit(0);
}, 2000);
