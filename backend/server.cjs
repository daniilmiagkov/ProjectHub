const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const projectHub = path.join(__dirname, '..');
const bodyParser = require('body-parser');

/*
const file = path.join(__dirname, '..') + '\\dist\\index.html'
*/
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // req.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
})
server.use(bodyParser.json());

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

server.get('/database/names', (req, res) => {
  res.set('Content-Type', 'application/json');
  fs.readdir(projectHub + '\\backend\\database', (err, files) => {
    // console.log(files)
    res.send(files);
  })
})

server.post('/database/lab', (req, res) => {
  console.log(req.body);
  const body = req.body;
  fs.writeFile( projectHub + '\\backend'+ body.Path, JSON.stringify(body), () => {
    console.log(projectHub + body.Path, "file overwritten")
  });
  res.status(200);
  res.send();
})

server.get(new RegExp('/database/\\w+/\\w+_\\w+'), (req, res) => {
  res.set('Content-Type', 'application/json');
  
  // Извлекаем параметры из пути запроса
  const [, dbName, subject, item] = req.path.match(/\/database\/(\w+)\/(\w+)_(\w+)/);
  
  // Собираем путь к файлу на основе параметров
  const filePath = `${projectHub}/backend/database/${dbName}/${subject}_${item}.json`;
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Обработка ошибок, например, если файл не найден
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
      // console.log(data);
    }
  });
});


server.get(new RegExp('/database/\\w+/subject'), (req, res) => {
  res.set('Content-Type', 'application/json');
  
  // Извлекаем параметры из пути запроса
  const [, dbName] = req.path.match(/\/database\/(\w+)\/subject/);
  
  // Собираем путь к файлу на основе параметров
  const filePath = `${projectHub}/backend/database/${dbName}/subject.json`;
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Обработка ошибок, например, если файл не найден
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});



server.listen(3000, () => {
  console.log('listening on port http://localhost:3000')
})