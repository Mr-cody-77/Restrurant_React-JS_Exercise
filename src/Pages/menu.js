import React from 'react'
import "./menu.css"

const menu = () => {
  return (
    <>
      <div className="menu-container">
        <h1>MENU-LIST</h1>
        <div className="menu-div">
          <img src={require('../Images/menu-img-1.jpeg')} alt="" />
          <div className="menu-info">
            <h2>Menu Head</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, vero consequuntur perferendis possimus quia. Id suscipit est odio dolorum.</p>
          </div>
        </div>
        <div className="menu-div">
          <img src={require('../Images/menu-img-2.jpeg')} alt="" />
          <div className="menu-info">
            <h2>Menu Head</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, vero consequuntur perferendis possimus quia. Id suscipit est odio dolorum.</p>
          </div>
        </div>
        <div className="menu-div">
          <img src={require('../Images/menu-img-3.jpeg')} alt="" />
          <div className="menu-info">
            <h2>Menu Head</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, vero consequuntur perferendis possimus quia. Id suscipit est odio dolorum.</p>
          </div>
        </div>
        <div className="menu-div">
          <img src={require('../Images/menu-img-4.jpeg')} alt="" />
          <div className="menu-info">
            <h2>Menu Head</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, vero consequuntur perferendis possimus quia. Id suscipit est odio dolorum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default menu
