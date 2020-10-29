const express = require('express');
const app = express();
const formidable = require('formidable');
const fs = require('fs-extra');

app.get('/', (req, res) => {
  res.end('1234');
});

app.get('/login/:username/:password', (req, res) => {
  res.json(req.params);
});

app.post('/uploads', (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    // res.json({error, fields, files});
    var newname = Date.now();
    var oldpath = files.userfile.path;
    var newpath =
      __dirname +
      '/upload/' +
      newname.toString() +
      '.' +
      files.userfile.name.split('.').pop();

    fs.move(oldpath, newpath, function (err) {
      res.json({result: 'Upload Successfully', account: fields});
    });
  });
});

app.listen(3000, () => {
  console.log('Server running');
});
