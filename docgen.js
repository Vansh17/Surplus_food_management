const fs = require('fs');
const path = require('path');
const axios = require('axios');

const OPENAI_MODEL = 'gpt-4';

// Directories to document
const targets = [
  { src: 'screens', out: 'docs/screens', label: 'React Native screen' },
  { src: 'components', out: 'docs/components', label: 'Component (UI/Logic)' },
  { src: 'server', out: 'docs/server', label: 'Node.js backend' },
];

async function generateMarkdownDoc(code, contextLabel) {
  const prompt = `
Generate detailed markdown documentation for a ${contextLabel} file.

Instructions:
- Explain what the file does
- Describe key functions/components/routes
- Highlight props, state, I/O, or API logic
- Add example usage or flow if helpful

Code:
\`\`\`js
${code}
\`\`\`
`;

  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: OPENAI_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data.choices[0].message.content;
}

async function processDir(baseSrc, baseOut, label) {
  const walk = (dir) => {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : [fullPath];
    });
  };

  const allJsFiles = walk(baseSrc).filter((f) => f.endsWith('.js'));

  for (const filePath of allJsFiles) {
    const relPath = path.relative(baseSrc, filePath);
    const outputPath = path.join(baseOut, `${relPath}.md`);

    const code = fs.readFileSync(filePath, 'utf-8');
    const doc = await generateMarkdownDoc(code, label);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, doc);
    console.log(`✅ Saved: ${outputPath}`);
  }
}

(async () => {
  for (const { src, out, label } of targets) {
    if (fs.existsSync(src)) {
      await processDir(src, out, label);
    }
  }
})();
