async function main() {
  const student = await getStudentAsync(1);
  console.log('Student: ', student);
  
  if (student.isEnrolled) {
    const courses = await getCourseListAsync();
    console.log('Course List: ', courses);
    
    await sendNotificationAsync(student.email, courses);
    console.log('Notification sent...');
  }
}

async function getStudentAsync(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        isEnrolled: true,
        email: 'john.doe@example.com',
      });
    }, 4000);
  });
}

async function getCourseListAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['course1', 'course2']);
    }, 4000);
  });
}

async function sendNotificationAsync(email, courses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

main();
