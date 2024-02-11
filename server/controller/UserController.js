const { StudentListModel, BusinessStudentListModel, ProfessionalListModel, BizProfessionalListModel, ResearcherListModel, AdminListModel } = require("../Database");
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
            name, email, bloodGroup,companyName, mobileNo,address, whatsappNo,designation,
            linkedIn,password,
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
            designation,
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
            designation,
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
    else if(userRole === "professionalbiz" ){
        const {
            name, email, bloodGroup,companyName, mobileNo,address, whatsappNo,designation,
            linkedIn,password,
          } = req.body;
      
          const hashPassword = await bcrypt.hash(password, 10);
        //  console.log(req.files);
          imageData = {
            filename: req.files.photo.name,
            contentType: req.files.photo.mimetype,
            data: req.files.photo.data,
          };
    //   console.log(imageData)
          const ProfessionalBiz = await BizProfessionalListModel.create({
            name,
            email,
            bloodGroup,
            companyName,
            designation,
            mobileNo,
            address,
            whatsappNo,
            linkedIn,
            password: hashPassword,
            image: imageData,
          });
      
          const ProfessionalBizWithoutPassword = {
            name,
            email,
            bloodGroup,
            companyName,
            designation,
            mobileNo,
            address,
            whatsappNo,
            linkedIn,
            image: imageData,
          };
      
          return res.json({
            msg: "Account Created Succesfully",
            status: true,
            ProfessionalBiz: ProfessionalBizWithoutPassword,
          });
    }
    else if(userRole === "researcher" ){
        const {
            name, email, bloodGroup,designation, mobileNo,address, linkedIn, whatsappNo,password,
          } = req.body;
      
          const hashPassword = await bcrypt.hash(password, 10);
        //  console.log(req.files);
          imageData = {
            filename: req.files.photo.name,
            contentType: req.files.photo.mimetype,
            data: req.files.photo.data,
          };
    //   console.log(imageData)
          const Researcher = await ResearcherListModel.create({
            name,
            email,
            bloodGroup,
            mobileNo,
            designation,
            address,
            whatsappNo,
            linkedIn,
            password: hashPassword,
            image: imageData,
          });
      
          const ResearcherWithoutPassword = {
            name,
            email,
            bloodGroup,
            mobileNo,
            designation,
            address,
            whatsappNo,
            linkedIn,
            image: imageData,
          };
      
          return res.json({
            msg: "Account Created Succesfully",
            status: true,
            Researcher: ResearcherWithoutPassword,
          });
    }
    
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.login = async(req, res, next)=>{

  try {
    const {role, email, password} = req.body
    if(role === 'Admin'){
     
      const user = await AdminListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Email", status: false });
      }
      const isPasswordValid = (password === user.password)
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
      };
  
      return res.json({
        msg: "Admin Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }
    if(role === 'Student'){
     
      const user = await StudentListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Username", status: false });
      }
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
        bloodGroup :user.bloodGroup,
        school:user.school,
        mobileNo:user.mobileNo,
        address:user.address,
        guardianPhone:user.guardianPhone,
        // image: user.image 
      };
  
      return res.json({
        msg: "Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }
    if(role === 'BizStudent'){
     
      const user = await BusinessStudentListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Username", status: false });
      }
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
        bloodGroup :user.bloodGroup,
        businessName:user.businessName,
        mobileNo:user.mobileNo,
        address:user.address,
        emergencyNo:user.emergencyNo,
        website:user.website,
        // image: user.image 
      };
  
      return res.json({
        msg: "Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }
    if(role === 'BizProfessional'){
     
      const user = await BizProfessionalListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Username", status: false });
      }
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
        bloodGroup :user.bloodGroup,
        designation:user.designation,
        linkedIn:user.linkedIn,
        companyName:user.companyName,
        mobileNo:user.mobileNo,
        address:user.address,
        whatsappNo:user.whatsappNo,
        // image: user.image 
      };
  
      return res.json({
        msg: "Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }
    if(role === 'Professional'){
     
      const user = await ProfessionalListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Username", status: false });
      }
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
        bloodGroup :user.bloodGroup,
        designation:user.designation,
        linkedIn:user.linkedIn,
        companyName:user.companyName,
        mobileNo:user.mobileNo,
        address:user.address,
        whatsappNo:user.whatsappNo,
        // image: user.image 
      };
  
      return res.json({
        msg: "Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }
    if(role === 'Researcher'){
     
      const user = await ResearcherListModel.findOne({ email });
      if (!user) {
        return res.json({ msg: "Wrong Username", status: false });
      }
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.json({ msg: "Wrong Password", status: false });
      }
      // Create a user object without the password field
      const userWithoutPassword = {
        id : user._id,
        name: user.name,
        email : user.email,
        bloodGroup :user.bloodGroup,
        designation:user.designation,
        linkedIn:user.linkedIn,
        mobileNo:user.mobileNo,
        address:user.address,
        whatsappNo:user.whatsappNo,
        image: user.image 
      };
  
      return res.json({
        msg: "Login Successfully",
        status: true,
        user: userWithoutPassword,
      });

    }



  } catch (error) {
    console.log(error)
    next(error)
  }

}

