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
  
  function getStudent(id, callback) {
    setTimeout(() => {
      callback({
        id: 1,
        name: 'John Doe',
        isEnrolled: true,
        email: 'john.doe@example.com',
      });
    }, 4000);
  }
  
  function getCourseList(callback) {
    setTimeout(() => {
      callback(['course1', 'course2']);
    }, 4000);
  }
  
  function sendNotification(email, courses, callback) {
    setTimeout(() => {
      callback();
    }, 4000);
  }