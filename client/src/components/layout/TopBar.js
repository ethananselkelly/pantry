import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar border">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text top-bar-menu"> My Pantry </li>
          <li className='red-tab'>
            <Link to="/">Home</Link>
          </li>
          <li className='green-tab'>
            <Link to="/ingredients">Pantry</Link>
          </li>
          <li className='blue-tab'>
            <Link to="/ingredients/search">Find ingredients</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul>
      </div>
    </div>
  );
};

export default TopBar;
