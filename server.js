const { query } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();


app.get('/', (req, res) => {
  res.send("Hello World!")
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});