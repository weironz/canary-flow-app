const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({ version: 'v1', message: 'Hello from backend v1!' });
});
app.listen(3000, () => console.log('Backend v1 running on 3000')); 