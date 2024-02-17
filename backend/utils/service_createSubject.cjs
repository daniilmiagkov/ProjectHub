const path = require('path')
const fs = require('fs');
import('../types/Subject.js')
  .then(({ Subject, Lab, Visit }) => {
    function fillInfo(subjectTitle, subjectDir, countLab, countVisit) {
      const subject = new Subject();
      subject.Title = subjectTitle;
      for (let i = 1; i <= countLab; i++) {
        const lab = new Lab();
        lab.Title = "Lab_" + i;
        lab.FileName = "Lab_" + i;
        lab.Subject = subject.Title;
        lab.Path = `\\database\\${subjectDir}\\${subjectDir}_${lab.Title}.json`;
        subject.Labs.push(lab.Title);
        fs.writeFile('..' + lab.Path, JSON.stringify(lab), () => {
          const absolutePath = path.resolve('..' + lab.Path);
          console.log("Файл lab создан:", absolutePath);    });
      }
      for (let i = 1; i <= countVisit; i++) {
        const visit = new Visit();
        visit.Title = "Visit_" + i;
        visit.FileName = "Visit_" + i;
        visit.Subject = subject.Title;
        visit.Path = `\\database\\${subjectDir}\\${subjectDir}_${visit.Title}.json`;
        subject.Visits.push(visit.Title);
        fs.writeFile('..' + visit.Path, JSON.stringify(visit), () => {
          const absolutePath = path.resolve('..' + visit.Path);
          console.log("Файл visit создан:", absolutePath);    });
      }
      // console.log(subject);
      fs.writeFile(`../database/${subjectDir}/subject.json`, JSON.stringify(subject), () => {
        console.log("file subject created")
      });
    }
    /*fillInfo("Большие данные", "bigdata", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)
    fillInfo("Тестирование", "test", 10, 20)*/
    fs.readdir(`../database`, (err, files) => {
      // console.log(files)
      for (let dir of files) {
        console.log(dir)
        fs.readdir(`../database/${dir}`, (err, files) => {
          fs.readFile(`../database/${dir}/${files[0]}`, (err, data) => {
            console.log(JSON.parse(data).Title)
            fillInfo(JSON.parse(data).Title, dir, 15, 17)
          })
        })
      }
    })
})

