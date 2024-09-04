"use client";

import React from 'react';

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="検索" />
    </div>
  );
};
