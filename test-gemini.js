const https = require('https');

const apiKey = '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';
const data = JSON.stringify({
  model: 'llama-3.1-8b-instant',
  messages: [{ role: 'user', content: 'Say hello in JSON format like {"greeting":"hello"}' }],
  max_tokens: 100,
  temperature: 0.2,
});

const req = https.request({
  hostname: 'api.groq.com',
  path: '/openai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  }
}, (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', body.substring(0, 500));
  });
});

req.on('error', (e) => console.error('Error:', e.message));
req.write(data);
req.end();
