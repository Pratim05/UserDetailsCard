const { StudentListModel, BusinessStudentListModel, ProfessionalListModel, BizProfessionalListModel, ResearcherListModel, AdminListModel } = require("../Database");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken")
require("dotenv").config()

//Settings for sent mail on User register
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mernwebdevelopment@gmail.com",
    pass: "aopoldzvmjufrgwz",
  },
});

module.exports.register = async (req, res, next) => {
  try {

    const {userRole} = req.body
    if(userRole === "student" ){
        const {
            name, email, bloodGroup, school, mobileNo,address, guardianPhone, password,
          } = req.body;
        const userCheck =  await StudentListModel.find({email})
       if(userCheck) {
        return res.json({
          msg: "User Already Exist",
          status: false,
        });
       }
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
          const userCheck =  await BusinessStudentListModel.find({email})
       if(userCheck) {
        return res.json({
          msg: "User Already Exist",
          status: false,
        });
       }
      
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

          const userCheck =  await ProfessionalListModel.find({email})
       if(userCheck) {
        return res.json({
          msg: "User Already Exist",
          status: false,
        });
       }
      
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
      

          const userCheck =  await BizProfessionalListModel.find({email})
       if(userCheck) {
        return res.json({
          msg: "User Already Exist",
          status: false,
        });
       }
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

          const userCheck =  await ResearcherListModel.find({email})
       if(userCheck) {
        return res.json({
          msg: "User Already Exist",
          status: false,
        });
       }
      
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

// module.exports.forgetpass = async (req, res, next) => {
//   try {
//     const { email , role } = req.body;
//     let user
//     if (role === 'Student'){
//        user = await StudentListModel.findOne({ email });
//     }else if(role === "BizStudent"){
//       user = await BusinessStudentListModel.findOne({ email });
//     }else if(role === "Professional"){
//       user = await ProfessionalListModel.findOne({ email });
//     }else if(role === "BizProfessional"){
//       user = await BizProfessionalListModel.findOne({ email });
//     }else if(role === "Researcher"){
//       user = await ResearcherListModel.findOne({ email });
//     }

//     if (!user) {
//       return res.json({ msg: "No Registered Account found", status: false });
//     }
//     const secret = process.env.JWT_SECRET_KEY + user.password
//     const token = jwt.sign({email:user.email , id : user._id}, secret , {expiresIn :"10m"})
    
//     const resetLink = `http://localhost:3000/resetpass/${role}/${user._id}/${token}`
//    // console.log(resetLink)
//     //Sending an email
//     var mailOptions = {
//       from: "IDShieldPro",
//       to: user.email,
//       subject: "Forget Password",
//       html: `
//           <h3> Welcome ${user.name},</h3>
//           <p>We wanted to express our sincere gratitude for choosing IDShieldPro .</p>
//           <h4>Click the Button to Reset Password , Link will Expires in 6 minutes</h4>
//           <button><a href =${resetLink}>Reset Password</a></button>

//           <p>If you not made this request , Please Ignore<p/
         
//           <p>Best regards,<br>
//           <b>The Swift Talk Team</b></p>
//         `,
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         //console.log("Email sent : " + info.response);
//       }
//     });

//     return res.json({ msg: "Check Your Email to Reset Password", status: true });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// module.exports.resetpass = async (req, res, next) => {
//   try {
//     const { id, token } = req.params;
//     const { newPassword } = req.body;

//     // console.log(req.params);
//     // console.log(newPassword);

//     const user = await UsersListModel.findOne({ _id: id });

//     if (!user) {
//       return res.json({ msg: "No Registered Account found", status: false });
//     }

//     try {
//       const secret = process.env.JWT_SECRET_KEY + user.password;

//       jwt.verify(token, secret, async (err, decoded) => {
//         if (err) {
//           return res.json({ msg: "Invalid Link or Expired", status: false });
//         }

//         // const passwordToHash = newPassword.newPassword; // Extract the actual password

//         // Hash the new password
//         try {
//           const hash = await bcrypt.hash(newPassword, 10);

//           // Update user's password in the database
//           await UsersListModel.findByIdAndUpdate({ _id: id }, { password: hash });

//           // Send success response
//           res.json({ msg: "New Password is Set", status: true });
//         } catch (hashError) {
//           // Handle error while hashing
//           console.error(hashError);
//           res.json({ msg: "Error hashing the password", status: false });
//         }
//       });
//     } catch (error) {
//       console.error(error);
//       res.json({ msg: "Reset Link not Verified", status: false });
//     }
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };