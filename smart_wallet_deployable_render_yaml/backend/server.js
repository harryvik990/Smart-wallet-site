const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/transactions', (req, res) => {
  const now = new Date().getTime();
  const transactions = [
    {
      hash: "0xabc123",
      amount: "0.25",
      from: "0xsender",
      to: "0xreceiver",
      timestamp: new Date().toISOString()
    }
  ];
  res.json(transactions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
