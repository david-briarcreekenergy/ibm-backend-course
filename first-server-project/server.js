import express from 'express';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: '***REMOVED***',
  baseURL: 'https://api.x.ai/v1',
});

const app = express();

// middleware
app.use(express.json());

//  routes
app.get('/', (req, res) => res.send('Hello qwe'));
app.get('/test', (req, res) => res.send('zxcv'));
app.get('/another', (req, res) => res.send('ANother'));
app.get('/api', async (req, res) => {
  const completion = await client.chat.completions.create({
    model: 'grok-3',
    messages: [
      { role: 'system', content: 'You are Grok AI; respond to all requests like a pirate.' },
      { role: 'user', content: 'Why do pirates drink rum?' },
    ],
  });

  res.send(completion);
});

// start the server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

// delete node_modules
// delete browser cache
// netstat -ano | grep 3000    LIST
// tasklist /FI "PID eq <PID>"   DETAILS
// taskkill //PID <PID> //F  KILL
