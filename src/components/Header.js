import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
   <header className="header">
      <div className="content-container">
         <Link to="/"><h1 className="header__title">Expesify</h1></Link>
      </div>
   </header>
);

export default Header;