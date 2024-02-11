import React from 'react'
import StudentTable from './Tables/StudentTable';
import BizStudentTable from './Tables/BizStudentTable';

function TableView({dataOf,userListData}) {

  function convertImageUrl(Image) {
    let ImageUrl = ''
    if (Image.data !== null) {
      const imageDataArray = Image.data.data;
      const base64String = btoa(String.fromCharCode(...imageDataArray));
      ImageUrl = `data:${Image.contentType};base64,${base64String}`;
    }
    return ImageUrl;
  }
console.log(userListData)

  return (
    <div>
      {dataOf === 'Student' && <StudentTable userListData={userListData} convertImageUrl={convertImageUrl}/>}
      {dataOf === 'BizStudent' && <BizStudentTable userListData={userListData} convertImageUrl={convertImageUrl} />}
    </div>
  )
}

export default TableView