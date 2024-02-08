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

const AdminSchema = ({
    username:{
        type : String,
        required : true,
        min :3,
        max:20,
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
    username:{
        type : String,
        required : true,
        min :3,
        max:20,
        unique :true
    },
    email:{
        type : String,
        required : true,
        max:20,
        unique :true
    },
    businessName:{
        type : String,
        required : true,
        max:20,
        unique :true
    },
    bloodGroup:{
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
    emergencyPhone:{
        type : String,
        required : true,
    },
    website:{
        type : URL,
        required : true,
    },
    password:{
        type : String,
        required : true,
        max:50,
    }
})

const AdminListModel = AdminListDb.model('AdminData', AdminSchema);
const StudentListModel = StudentListDb.model('Student', StudentSchema);



module.exports = {
    AdminListModel,
    StudentListModel
}