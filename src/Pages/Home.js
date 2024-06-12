import React from 'react'

import "./Home.css"
const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-content">
        <div className="home-para">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia unde ratione aliquam maxime accusantium magni recusandae eius minus ad laboriosam voluptates ipsa perspiciatis quos dolores commodi, tempora sequi doloribus earum!</p>
        </div>
        <img src={require('../Images/background.jpg')} alt="Picture will be uploaded here" />
      </div>
      <div className="home-content">
        <img src={require('../Images/food.jpeg')} alt="Picture will be uploaded here" />
        <div className="home-para">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia unde ratione aliquam maxime accusantium magni recusandae eius minus ad laboriosam voluptates ipsa perspiciatis quos dolores commodi, tempora sequi doloribus earum!</p>
        </div>
      </div>
      <div className="AdditionalInfo">
        <div className="info">
          <h3>Location</h3>
          <p>12/24, Nirmal Road <br /> Main Bazaar, Durgapur <br />West Bengal-713214</p>
        </div>
        <div className="info">
          <h3>Opening Schedules</h3>
          <p>Monday - Friday : 4 P.M - 9 P.M <br /> Saturday - Sunday : 4 P.M - 11 P.M </p>
        </div>
        <div className="info">
          <h3>Contact Details</h3>
          <p>Email :- codingrestaurant@gmail.com <br />Mob : 3216549870 , 3216549870</p>
        </div>
      </div>
    </div>
  )
}

export default Home
