const express = require('express');
const path = require('path');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
app.use(express.json());

// Serve index.html when user visits the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Updated client initialization with Puppeteer options
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('WhatsApp Bot Ready'));
client.on('error', err => console.error('Client error', err));

client.initialize();

app.post('/send', async (req, res) => {
  const { toNumber, message } = req.body;
  
  try {
    const isRegistered = await client.isRegisteredUser(toNumber);
    if (!isRegistered) {
      return res.json({ message: 'Number is not on WhatsApp' });
    }
    
    await client.sendMessage(`${toNumber}@c.us`, message);
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
