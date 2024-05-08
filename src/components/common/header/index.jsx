import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo' />

      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i class="ri-map-pin-fill absolute-center location-icon"></i>
              <div>Bhopal</div>
            </div>
            <i class="ri-arrow-down-s-fill absolute-center"></i>
          </div>
          <div className='location-search-separator'></div>
          <div className='header-search-bar'>
          <i class="ri-search-line absolute-center search-icon"></i>
          <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
        <i class="ri-user-fill header-profile-icon"></i>
          <span className='header-user-name'>Zeyaur</span>
          <i class="ri-arrow-down-s-line absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  )
};

export default Header;