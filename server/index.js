const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());

const path = require('path')
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
