import React from 'react';
import CraftList from '../../CraftList'; // обернут функцией коннект, результат функции коннект
import SideBar from '../../SideBar/SideBar';
import './MainPage.css'


const MainPage = () => {
  return (
    <div className="main-content">
      <SideBar/>
      <CraftList/>
    </div>
  )
}

export default MainPage;