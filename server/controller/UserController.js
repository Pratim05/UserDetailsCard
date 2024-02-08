const { StudentListModel, BusinessStudentListModel, ProfessionalListModel } = require("../Database");
const bcrypt = require("bcrypt");

// const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports.register = async (req, res, next) => {
  try {

    const {userRole} = req.body
    if(userRole === "student" ){
        const {
            name, email, bloodGroup, school, mobileNo,address, guardianPhone, password,
          } = req.body;
      
          const hashPassword = await bcrypt.hash(password, 10);
        //  console.log(req.files);
          imageData = {
            filename: req.files.photo.name,
            contentType: req.files.photo.mimetype,
            data: req.files.photo.data,
          };
    //   console.log(imageData)
          const StudentDetails = await StudentListModel.create({
            name,
            email,
            bloodGroup,
            school,
            mobileNo,
            address,
            guardianPhone,
            password: hashPassword,
            image: imageData,
          });
      
          const studentWithoutPassword = {
            name,
            email,
            bloodGroup,
            school,
            mobileNo,
            address,
            guardianPhone,
            image: imageData,
          };
      
          return res.json({
            msg: "Account Created Succesfully",
            status: true,
            student: studentWithoutPassword,
          });
    }

    else if(userRole === "businessStudent" ){
        const {
            name, email, bloodGroup,businessName, mobileNo,address,emergencyNo, website, password,
          } = req.body;
      
          const hashPassword = await bcrypt.hash(password, 10);
        //  console.log(req.files);
          imageData = {
            filename: req.files.photo.name,
            contentType: req.files.photo.mimetype,
            data: req.files.photo.data,
          };
    //   console.log(imageData)
          const StudentDetails = await BusinessStudentListModel.create({
            name,
            email,
            bloodGroup,
            businessName,
            mobileNo,
            address,
            emergencyNo,
            website,
            password: hashPassword,
            image: imageData,
          });
      
          const studentWithoutPassword = {
            name,
            email,
            bloodGroup,
            businessName,
            mobileNo,
            address,
            emergencyNo,
            website,
            image: imageData,
          };
      
          return res.json({
            msg: "Account Created Succesfully",
            status: true,
            student: studentWithoutPassword,
          });
    }
    else if(userRole === "professional" ){
        const {
            name, email, bloodGroup,businessName, mobileNo,address,emergencyNo, website, password,
          } = req.body;
      
          const hashPassword = await bcrypt.hash(password, 10);
        //  console.log(req.files);
          imageData = {
            filename: req.files.photo.name,
            contentType: req.files.photo.mimetype,
            data: req.files.photo.data,
          };
    //   console.log(imageData)
          const Professional = await ProfessionalListModel.create({
            name,
            email,
            bloodGroup,
            companyName,
            mobileNo,
            address,
            whatsappNo,
            linkedIn,
            password: hashPassword,
            image: imageData,
          });
      
          const ProfessionalWithoutPassword = {
            name,
            email,
            bloodGroup,
            companyName,
            mobileNo,
            address,
            whatsappNo,
            linkedIn,
            image: imageData,
          };
      
          return res.json({
            msg: "Account Created Succesfully",
            status: true,
            Professional: ProfessionalWithoutPassword,
          });
    }
    
  } catch (err) {
    console.log(err);
    next(err);
  }
};
