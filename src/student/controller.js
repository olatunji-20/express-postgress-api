const pool = require("../../db");
const queries = require("./queries")

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) {
            res.send("error in getStudent query...");
            console.log("error in getStudent query...");
            console.log("ERRRORRR" + " " + error)
        }else {
            res.status(200).json(results.rows);
            console.log(results.rows);
        }
    });
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id] ,(error, results) => {
        if(error){
            console.log("error in getStudentById query...");
            res.send("error in getStudentById query...");
            console.log(error)
        }else {
            res.status(200).json(results.rows);
            console.log(results.rows);
        }
    })
}

const addStudent = (req, res) => {
    const { name, email, phone, classs, social, dob  } = req.body;
    pool.query(queries.checkForEmail, [email], (error, results) => {
        if(results.rows.length) {
            res.send("email already exits");
            console.log("email already exists");
            console.log(error)
        } 
        else {
            pool.query(queries.addStudent, [name, email, phone, classs, social, dob], (error, results) => {
                if(error) {
                    res.send("error in addStudent query...");
                    console.log("error in addStudent query...");
                } else {
                    res.send("student created sucsessfully");
                    console.log("student created successfully");
                    console.log(results.json())
                }
            })
        }
    })

}


const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.checkForStudent, [id], (error, results) => {
        if(!results.rows.length) {
            res.send("The student couldn't be deleted as he/she does not exist...");
            console.log("The student couldn't be deleted as he/she does not exist...");
            console.log(error)
        }else {
            pool.query(queries.removeStudent, [id], (error, results) => {
                if(error) throw error;
                res.send("student deleted successfully..");
                console.log("student deleted successfully...");
            })
        }
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.checkForStudent, [id], (error, results) => {
        if(!results.rows.length) {
            res.send("student does not exist...");
            console.log("student does not exist...");
            console.log(error)
        } else {
            pool.query(queries.updateStudent, [ name, id ], (error, results) => {
                if(error) {
                    res.send("error in updateStudent query...");
                    console.log(error)
                }else {
                    res.send("student's info successfully updated...");
                    console.log("student's info successfully updated...");
                }
            })
        }
    })
}



module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
}