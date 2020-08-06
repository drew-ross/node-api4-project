require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: "server running", port, environmentName });
});

const port = process.env.PORT || 5000;
const environmentName = process.env.ENV_NAME;

server.listen(port, () => console.log(`Server running on port ${port}`));