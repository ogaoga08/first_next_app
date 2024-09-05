"use client";

import React from 'react';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header>
      <div className="header">
        <h2>myv</h2>
        <button onClick={openModal}>=</button>
      </div>
    </header>
  );
};

export default Header;