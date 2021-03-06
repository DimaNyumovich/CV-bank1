const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello from server');
});

app.get('/persons', function (req, res) {
  // console.log(req.body);
  // console.log('HHHHHHHHHHHHHHHHHHHHHHHHh');
  res.status(200).send([{ name: { firstName: 'Dima', lastName: 'KU' },
    experience: { position: 'Backend', years: 3, totalYears: 3 },
    contact:
      { residence: 'Israel',
        birthday: '',
        phone: 1234567,
        email: 'test@test.com' } },
  { name: { firstName: 'Dima', lastName: 'KU000' },
    experience: { position: 'Backend', years: 3, totalYears: 3 },
    contact:
    { residence: 'Israel',
      birthday: '',
      phone: 1234567,
      email: 'test@test.com' } },
  { name: { firstName: 'Dima', lastName: 'KU' },
    experience: { position: 'Backend', years: 3, totalYears: 3 },
    contact:
    { residence: 'Israel',
      birthday: '',
      phone: 1234567,
      email: 'test@test.com' } }]
);
});

app.post('/persons', function (req, res) {
  console.log(req.body);
  debugger;
  res.status(200).send({"message": "Data received"});
  console.log('add.post - server')
});

app.listen(PORT, function () {
  console.log("Server running on localhost: " +  PORT);
});
