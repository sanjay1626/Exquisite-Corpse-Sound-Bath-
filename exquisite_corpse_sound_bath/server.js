const express = require('express');
const app = express();

const cors = require('cors'); //middleware


app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: '1',
      email: 'snjgonsalves@gmail.com',
      pasword: "test123"
    });
  });
 

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));