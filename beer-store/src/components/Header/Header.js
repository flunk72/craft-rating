import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo text-dark">Craft Rating</div>
      </Link>
      <div className="account">
        <Link to="/forum">
          <div className="account-forum">
            <span>Форум</span>
          </div>
        </Link>
        <div className="account-name">Аккаунт</div>
      </div>
    </header>
  );
};


export default Header;

