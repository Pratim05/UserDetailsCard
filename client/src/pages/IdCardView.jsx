import React from 'react'
import { useLocation } from 'react-router-dom'
import StudentCard from '../components/Cards/StudentCard'

const IdCardView = ({}) => {

    const location = useLocation()
    const {user , role} = location.state
    const userString = JSON.stringify(user, null, 2);
    console.log(user,role)

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
        
       }
      }



    
  return (
    <div>
 
<StudentCard user={user} role={role} convertImageUrl={convertImageUrl}/>

    </div>
  )
}

export default IdCardView