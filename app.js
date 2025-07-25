const express = require('express');
const dotenv = require('dotenv');
const loanRoutes = require('./routes/loanRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // 👈 needed to parse POST body

// 👇 mounts all routes starting with /api/v1
app.use('/api/v1', loanRoutes);

// health check
app.get('/', (req, res) => {
  res.send('✅ Agetware API live');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
