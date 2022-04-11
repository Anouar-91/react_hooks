import React from 'react';
import ContentData from './ContentData'

const ProfileData = (props) => {
    return (
        <div>
            <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample">
                    Information sur vegeta ?
                </a>
            </p>
            <ContentData userData={props.welcome} />
        </div>
    )
}

export default ProfileData