import React from 'react'

function ProfilePicture({image, personName}){
    return (
        <div className='profilePictureDiv'>
            <img src={image} alt={personName} />
        </div>
    )
}

export default ProfilePicture