const path = require('path')
import('../types/Subject.js')
  .then(({ Subject, Lab }) => {
  const fs = require('fs');
  const subject = new Subject("Тестирование");
  for (let i = 1; i < 11; i++) {
    const lab = new Lab();
    lab.Title = "Lab_" + i;
    lab.FileName = "Lab_" + i;
    lab.Subject = "Тестирование";
    lab.Path = `\\database\\test\\test_${lab.Title}.json`;
    subject.Labs.push(lab.Title);
    fs.writeFile('..' + lab.Path, JSON.stringify(lab), () => {
      const absolutePath = path.resolve('..' + lab.Path);
      console.log("Файл создан:", absolutePath);    });
  }
  // console.log(subject);
  fs.writeFile("../database/test/test_subject.json", JSON.stringify(subject), () => {
    console.log("file created")
  });
})
