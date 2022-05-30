import React from 'react'
import ProfilePicture from './ProfilePicture'

function Bio({name, user, image, textBio}){
    return (
        <div className='bio'>
            <ProfilePicture name={name} image={image} />

            <h2>{name}</h2>
            <h3>{user}</h3>

            <p>{textBio}</p>

            <hr/>
        </div>
    )
}

export default Bio