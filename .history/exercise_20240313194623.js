// Refactor the code to use async/await functions

getStudent(1, (student) => {
  console.log('Student: ', student);
  if (student.isEnrolled) {
    getCourseList((courses) => {
      console.log('Course List: ', courses);
      sendNotification(student.email, courses, () => {
        console.log('Notification sent...');
      });
    });
  }
});

function getStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'John', 
        isEnrolled: true, 
        email: 'john.doe@example.com'})
        reject(new Error('Error getting student'));
    });
  });
}

function sendNotification(email, courses, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}

async function getStudentAsync(id) {
  const student = await getStudent();
  console.log('Student: ', student);
}