import React from 'react'
import { useLocation } from 'react-router-dom'

const IdCardView = ({}) => {

    const location = useLocation()
    const {user , role} = location.state
    // const userString = JSON.stringify(user, null, 2);
    // console.log(userString)

    function convertImageUrl(Image) {
        let ImageUrl = ''
        if (Image.data !== null) {
          const imageDataArray = Image.data.data;
          const base64String = btoa(String.fromCharCode(...imageDataArray));
          ImageUrl = `data:${Image.contentType};base64,${base64String}`;
        }
        return ImageUrl;
      }



    
  return (
    <div>
 
<img src={convertImageUrl(user.image)} alt=""/>
<h1>{user.name}</h1>
<p>{role}</p>
<p>{user.address}</p>

    </div>
  )
}

export default IdCardView