// require('dotenv').config()
import 'dotenv/config';
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: process.env.BASE_URL,
});

const app = express();

// middleware
app.use(express.json());
app.use(cors());

//  routes
app.get('/', (req, res) => res.send('Hello qwe'));
app.get('/test', (req, res) => res.send('zxcv'));
app.get('/another', (req, res) => res.send('ANother'));
app.post('/api', async (req, res) => {
  console.log('request received');
  // console.log(req.body?: 'just say hello');
  const { prompt } = req.body;
  const completion = await client.chat.completions.create({
    model: 'grok-3',
    messages: [
      { role: 'system', content: 'You are Grok AI; respond to all requests like a senior level backend Javascript developer.' },
      { role: 'user', content: prompt },
    ],
  });
  console.log(completion);
  res.send(completion.choices[0]);
});

// start the server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

// delete node_modules
// delete browser cache
// netstat -ano | grep 3000    LIST
// tasklist /FI "PID eq <PID>"   DETAILS
// taskkill //PID <PID> //F  KILL
