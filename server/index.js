const express = require('express');
const  cors = require('cors');
const router = require('./router');
const  app = express();

//const port = 3000;
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use(router);
  
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});