const pool = require("../../db");
const queries = require("./queries")

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) {
            res.send("error in query...");
            console.log("error in query...");
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
            console.log("error in query...");
            res.send("error in query...");
        }else {
            res.status(200).json(results.rows);
            console.log(results.rows);
        }
    })
}

module.exports = {
    getStudents,
    getStudentById,
}