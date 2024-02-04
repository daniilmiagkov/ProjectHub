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

server.get(new RegExp('/database/db_\\w+/\\w+_subject.json'), (req, res) => {
  res.set('Content-Type', 'application/json');
  
  // Извлекаем параметры из пути запроса
  const [, dbName, subject] = req.path.match(/\/database\/(db_\w+)\/(\w+)_subject.json/);
  
  // Собираем путь к файлу на основе параметров
  const filePath = `${projectHub}/backend/database/${dbName}/${subject}_subject.json`;
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Обработка ошибок, например, если файл не найден
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
      console.log(data);
    }
  });
});



server.listen(3000, () => {
  console.log('listening on port http://localhost:3000')
})