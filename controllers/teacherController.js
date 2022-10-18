//importing student model
const Student = require('../models/student');



const teacher_viewall_get = async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/viewall", {student : allStudents})
};
const teacher_sem1_get = async (req, res) => {
	const allStudents = await Student.find() 
    res.render("teacher/sem1",{student : allStudents})
};
const teacher_sem2_get = async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/sem2",{student : allStudents})
};
const teacher_final_get = async (req, res) => {
    const allStudents = await Student.find() 
    res.render("teacher/final",{student : allStudents})
};

const teacher_edit_get =async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacher/edit", {user : user})
};
const teacher_edit_post =async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/teacher/viewall")
};
const teacher_delete_get =async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacher/viewall")
};

const teacher_add_get = (req, res) => {
    res.render("teacher/addstudent");
};
const teacher_add_post = async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,  
        roll : req.body.roll,             
        
        score11 : req.body.score11 ,
		score12 : req.body.score12 ,
		score13 : req.body.score13 ,
		score21 : req.body.score21 ,
		score22 : req.body.score22 ,
		score23 : req.body.score23 
    })
    try {
        const newStudent = await singleStudent.save();
        res.redirect("/teacher/add");
      } catch {
        res.send("error")
    }
};

//exporting teacher controller functions
module.exports={
    
    teacher_viewall_get,
    teacher_edit_get,
	teacher_sem1_get,
	teacher_sem2_get,
	teacher_final_get,
    teacher_edit_post,
    teacher_delete_get,
    teacher_add_post,
    teacher_add_get
    
}