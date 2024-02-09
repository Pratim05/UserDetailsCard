require('dotenv').config()
const mongoose = require('mongoose')

const options = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  };

  const AdminListDb = mongoose.createConnection(process.env.ADMIN_MONGO_URL, options);
  AdminListDb.on('error', console.error.bind(console, 'AdminListDb database connection error:'));
  AdminListDb.once('open', () => {
  console.log('Connected to AdminListDb database!');
});

 const StudentListDb = mongoose.createConnection(process.env.STUDENT_MONGO_URL, options);
  StudentListDb.on('error', console.error.bind(console, 'StudentListDb database connection error:'));
  StudentListDb.once('open', () => {
  console.log('Connected to StudentListDb database!');
});

  const BusinessStudentListDb = mongoose.createConnection(process.env.BUSINESS_STUDENT_MONGO_URL, options);
  StudentListDb.on('error', console.error.bind(console, 'BusinessStudentListDb database connection error:'));
  StudentListDb.once('open', () => {
  console.log('Connected to BusinessStudentListDb database!');
});

  const ProfessionalListDb = mongoose.createConnection(process.env.PROFESSIONAL_MONGO_URL, options);
  StudentListDb.on('error', console.error.bind(console, 'ProfessionalListDb database connection error:'));
  StudentListDb.once('open', () => {
  console.log('Connected to ProfessionalListDb database!');
});

  const BizProfessionalListDb = mongoose.createConnection(process.env.BIZ_PROFESSIONAL_MONGO_URL, options);
  StudentListDb.on('error', console.error.bind(console, 'BizProfessionalListDb database connection error:'));
  StudentListDb.once('open', () => {
  console.log('Connected to BizProfessionalListDb database!');
});

  const ResearcherListDb = mongoose.createConnection(process.env.RESEARCHER_MONGO_URL, options);
  StudentListDb.on('error', console.error.bind(console, 'ResearcherListDb database connection error:'));
  StudentListDb.once('open', () => {
  console.log('Connected to ResearcherListDb database!');
});

const AdminSchema = ({
    username:{
        type : String,
        required : true,
        unique :true
    },
    email:{
        type : String,
        required : true,
        max:50,
        unique :true
    },
    password:{
        type : String,
        required : true,
        max:50,
    }
})

const StudentSchema = ({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        max:20,
    },
    bloodGroup:{
        type : String,
        required : true,
    },
    school:{
        type : String,
        required: true
    },
    mobileNo:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    guardianPhone:{
        type : String,
    },
    image :{
        filename: String ,
        contentType:String,
        data: mongoose.Schema.Types.Buffer
      },
    password:{
        type : String,
        required : true,
        max:50,
    },

})


const BusinessStudentSchema = ({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        max:20,
    },
    bloodGroup:{
        type : String,
        required : true,
    },
    businessName:{
        type : String,
        required : true,
    },
    mobileNo:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    EnergencyNo:{
        type : String,
    },
    image :{
        filename: String ,
        contentType:String,
        data: mongoose.Schema.Types.Buffer
      },
    password:{
        type : String,
        required : true,
        max:50,
    },

})
const ProfessionalSchema = ({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        max:20,
    },
    bloodGroup:{
        type : String,
        required : true,
    },
    companyName:{
        type : String,
        required : true,
    },
    designation:{
        type : String,
        required : true,
    },
    mobileNo:{
        type : String,
        required : true,
    },
    whatsappNo:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    linkedIn:{
        type : String,
        required : true,
    },
    image :{
        filename: String ,
        contentType:String,
        data: mongoose.Schema.Types.Buffer
      },
    password:{
        type : String,
        required : true,
        max:50,
    },

})
const ProfessionalBizSchema = ({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        max:20,
    },
    bloodGroup:{
        type : String,
        required : true,
    },
    companyName:{
        type : String,
        required : true,
    },
    designation:{
        type : String,
        required : true,
    },
    mobileNo:{
        type : String,
        required : true,
    },
    whatsappNo:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    linkedIn:{
        type : String,
        required : true,
    },
    image :{
        filename: String ,
        contentType:String,
        data: mongoose.Schema.Types.Buffer
      },
    password:{
        type : String,
        required : true,
        max:50,
    },

})
const ResearcherSchema = ({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        max:20,
    },
    bloodGroup:{
        type : String,
        required : true,
    },
    designation:{
        type : String,
        required : true,
    },
    mobileNo:{
        type : String,
        required : true,
    },
    whatsappNo:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },
    linkedIn:{
        type : String,
        required : true,
    },
    image :{
        filename: String ,
        contentType:String,
        data: mongoose.Schema.Types.Buffer
      },
    password:{
        type : String,
        required : true,
        max:50,
    },

})


const AdminListModel = AdminListDb.model('admindatas', AdminSchema);

const StudentListModel = StudentListDb.model('studentdatas', StudentSchema);
const BusinessStudentListModel = BusinessStudentListDb.model('businessstudentdatas', BusinessStudentSchema);

const ProfessionalListModel = ProfessionalListDb.model('professionaldatas', ProfessionalSchema);

const BizProfessionalListModel = BizProfessionalListDb.model('bizprofessionaldatas', ProfessionalSchema);

const ResearcherListModel = ResearcherListDb.model('researcherdatas', ResearcherSchema);



module.exports = {
    AdminListModel,
    StudentListModel,
    BusinessStudentListModel,
    ProfessionalListModel,
    BizProfessionalListModel,
    ResearcherListModel
}