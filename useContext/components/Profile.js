import vegeta from '../img/vegeta_1771.jpg'
import ProfileData from './ProfileData'
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className='container'>
          <h1>TEST</h1>
          <img src={vegeta} alt="vegeta" className="img-thumbnail mb-3"/>
          <ProfileData welcome={this.props.info} />
      </div>
    )
  }
}
