import('../types/Subject.js')
  .then(({ Subject, Lab }) => {
  const fs = require('fs');
  const subject = new Subject("Тестирование");
  for (let i = 0; i < 10; i++) {
    subject.Labs.push(new Lab());
  }
  // console.log(subject);
  fs.writeFile("../database/test/test_subject.json", JSON.stringify(subject), () => {
    console.log("file created")
  });
})
