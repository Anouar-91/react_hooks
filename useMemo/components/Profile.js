import React from 'react'

function Profile({id, profile}) {
    console.log("je suis dasn profile")
  return (
    <div>
        <ul className="list-group">
            <li className="list-group-item"><p className="h2">User ID : {id}</p></li>
            <li className="list-group-item"><strong>Nom :</strong> {profile.name}</li>
            <li className="list-group-item"><strong>Pseudo :</strong>{profile.username}</li>
            <li className="list-group-item"><strong>Email :</strong>{profile.email}</li>
        </ul>
    </div>
  )
}

export default React.memo(Profile)