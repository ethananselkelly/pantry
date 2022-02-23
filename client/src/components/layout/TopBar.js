import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link className='top-bar-tab' to="/user-sessions/new">Sign In</Link>
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
          <li className="menu-text top-bar-menu"> Your Pantry </li>
          <li>
            <Link className='top-bar-tab' to="/">Home</Link>
          </li>
          <li>
            <Link className='top-bar-tab' to="/ingredients">Pantry</Link>
          </li>
          <li>
            <Link className='top-bar-tab' to="/ingredients/search">Find ingredients</Link>
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
