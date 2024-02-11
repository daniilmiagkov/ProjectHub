import('../types/Subject.js')
  .then(({ Subject, Lab }) => {
  const fs = require('fs');
  const subject = new Subject("Тестирование");
  for (let i = 0; i < 10; i++) {
    const lab = new Lab();
    lab.Title = "Lab " + i;
    lab.Subject = "Тестирование";
    subject.Labs.push(lab);
  }
  // console.log(subject);
  fs.writeFile("../database/test/test_subject.json", JSON.stringify(subject), () => {
    console.log("file created")
  });
})
