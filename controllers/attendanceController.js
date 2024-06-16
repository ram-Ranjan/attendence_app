const Student = require('../models/student');

exports.getIndex = async (req, res) => {
  res.render('index');
};

exports.getAttendance = async (req, res) => {
  const students = await Student.findAll();
  res.render('attendance', { students });
};

exports.postAttendance = async (req, res) => {
  const { studentIds, isPresent } = req.body;

  await Promise.all(
    studentIds.map(async (id) => {
      const student = await Student.findByPk(id);
      student.isPresent = isPresent;
      await student.save();
    })
  );

  const students = await Student.findAll();
  res.render('attendance', { students });
};