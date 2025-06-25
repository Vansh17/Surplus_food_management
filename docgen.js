const fs = require('fs');
const path = require('path');
const axios = require('axios');

const filesToDoc = [
  'App.js',
  'screens/LoginScreen.js',
  'screens/CartScreen.js',
  'server/index.js'
];

async function generateDoc(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const prompt = `
  Generate clean, developer-focused markdown documentation for this file.
  Include:
  - What this file does
  - Key components/functions
  - Props or inputs
  - Sample usage (if applicable)

  Code:
  \`\`\`js
  ${code}
  \`\`\`
  `;

  const res = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const doc = res.data.choices[0].message.content;
  const outFile = `docs/${path.basename(filePath)}.md`;
  fs.mkdirSync('docs', { recursive: true });
  fs.writeFileSync(outFile, doc);
  console.log(`✅ Saved: ${outFile}`);
}

(async () => {
  for (const file of filesToDoc) {
    await generateDoc(file);
  }
})();
