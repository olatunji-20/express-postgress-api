const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkForEmail = "SELECT s FROM students s WHERE s.email = $1"
const addStudent = "INSERT INTO students (name, email, phone, class, social, dob) VALUES ($1, $2, $3, $4, $5, $6)";
const checkForStudent = "SELECT s FROM students s WHERE s.id = $1"
const removeStudent = "DELETE FROM students WHERE id = $1";



module.exports = {
    getStudents,
    getStudentById,
    checkForEmail,
    addStudent,
    checkForStudent,
    removeStudent,
}