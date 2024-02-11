import React from 'react'
import StudentTable from './Tables/StudentTable';
import BizStudentTable from './Tables/BizStudentTable';
import ProfessionalTable from './Tables/ProfessionalTable';
import BizProfessional from './Tables/BizProfessional';

function TableView({dataOf,userListData}) {

  function convertImageUrl(Image) {

    try {
      let ImageUrl = ''
    if (Image.data !== null) {
      const imageDataArray = Image.data.data;
      const base64String = btoa(String.fromCharCode(...imageDataArray));
      ImageUrl = `data:${Image.contentType};base64,${base64String}`;
    }
    return ImageUrl;
    } catch (error) {
      console.log('Error in Image convert')
    }
  }
//console.log(userListData)

  return (
    <div>
      {dataOf === 'Student' && <StudentTable userListData={userListData} convertImageUrl={convertImageUrl}/>}

      {dataOf === 'BizStudent' && <BizStudentTable userListData={userListData} convertImageUrl={convertImageUrl} />}

      {dataOf === 'Professional' && <ProfessionalTable userListData={userListData} convertImageUrl={convertImageUrl} />}

      {dataOf === 'BizProfessional' && <BizProfessional userListData={userListData} convertImageUrl={convertImageUrl} />}

      {dataOf === 'Researcher' && <BizProfessional userListData={userListData} convertImageUrl={convertImageUrl} />}

    </div>
  )
}

export default TableView