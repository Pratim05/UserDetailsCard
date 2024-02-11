const { StudentListModel } = require("../Database")



module.exports.fetchUserListData = async (req, res, next) => {
    try {
        const { role } = req.body;
        if (role === 'Student') {
           
            const UsersListData = await StudentListModel.find().select('-password');

            // console.log('Student List : ', UsersListData);
            return res.json({
                msg: "Students Data Fetched",
                status: true,
                UsersListData: UsersListData,
            });
        }
    } catch (error) {
        console.log(error);
        next(err);
    }
};




