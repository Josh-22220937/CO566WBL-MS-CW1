import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePlus, AiOutlineShopping, AiOutlineUnorderedList } from 'react-icons/ai';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={onClose}>
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-recipe" onClick={onClose}>
              <AiOutlinePlus />
              Create Recipe
            </Link>
          </li>
          <li>
            <Link to="/create-shopping-list" onClick={onClose}>
              <AiOutlineShopping />
              Create Shopping List
            </Link>
          </li>
          <li>
            <Link to="/view-all" onClick={onClose}>
              <AiOutlineUnorderedList />
              View All
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;