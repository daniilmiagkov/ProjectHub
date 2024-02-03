const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const projectHub = path.join(__dirname, '..');

/*
const file = path.join(__dirname, '..') + '\\dist\\index.html'
*/
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
})

server.use('/dist', express.static(path.join(projectHub, 'dist')));

server.use(express.static(path.join(__dirname, '.')));
/*
console.log(path.join(__dirname, '..'))
*/
server.get('/', function(req, res) {
  res.set('Content-Type', 'text/html');
  
  fs.readFile(projectHub + '\\dist\\index.html', 'utf8', (err, data) => {
    res.send(data);
    
  })
})

server.get('/database/nameSubjects', (req, res) => {
  res.set('Content-Type', 'application/json');
  
  fs.readFile(projectHub + '\\backend\\database\\nameSubjects.json', (err, data) => {
    res.send(data);
    
  })
})

server.get(new RegExp('/database/subject_\w+.json'), (req, res) => {
  res.set('Content-Type', 'application/json');
  
  fs.readFile(projectHub + '\\backend\\database\\listSubjects.json', (err, data) => {
    res.send(data);
    
  })
})


server.listen(3000, () => {
  console.log('listening on port http://localhost:3000')
})