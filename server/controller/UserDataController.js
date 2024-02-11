const { StudentListModel, BusinessStudentListModel, ProfessionalListModel, BizProfessionalListModel, ResearcherListModel } = require("../Database")



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
        if (role === 'BizStudent') {
           
            const UsersListData = await BusinessStudentListModel.find().select('-password');

            // console.log('Student List : ', UsersListData);
            return res.json({
                msg: "BizStudent Data Fetched",
                status: true,
                UsersListData: UsersListData,
            });
        }
        if (role === 'Professional') {
           
            const UsersListData = await ProfessionalListModel.find().select('-password');

            // console.log('Student List : ', UsersListData);
            return res.json({
                msg: "Professional Data Fetched",
                status: true,
                UsersListData: UsersListData,
            });
        }
        if (role === 'Researcher') {
           
            const UsersListData = await ResearcherListModel.find().select('-password');

            // console.log('Student List : ', UsersListData);
            return res.json({
                msg: "Students Data Fetched",
                status: true,
                UsersListData: UsersListData,
            });
        }
        if (role === 'BizProfessional') {
           
            const UsersListData = await BizProfessionalListModel.find().select('-password');

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




