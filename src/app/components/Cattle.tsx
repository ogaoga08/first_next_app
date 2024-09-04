"use client";

import React from 'react';

interface CattleProps {
  currentLevel: number;
  currentIndex: number;
  currentSubIndex?: number;
}

export const Cattle: React.FC<CattleProps> = (props) => {
  const { currentLevel, currentIndex, currentSubIndex } = props;

  const changeCattle = () => {
    if (currentLevel === 0) {
      return <img src="./src/assets/cattle.png" alt="cattle" />;
    } else if (currentLevel === 1 && currentIndex === 0) {
      return <img src="./src/assets/cattle_y.png" alt="cattle_y" />;
    } else if (currentLevel === 1 && currentIndex === 1) {
      return <img src="./src/assets/cattle_h.png" alt="cattle_h" />;
    } else if (currentLevel >= 2 && currentIndex === 0) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_y_head.png" alt="cattle_y_head" />;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_y_shoulder.png" alt="cattle_y_shoulder" />;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_y_back.png" alt="cattle_y_back" />;
      } else if (currentSubIndex === 3) {
        return <img src="./src/assets/cattle_y_stomach.png" alt="cattle_y_stomach" />;
      } else if (currentSubIndex === 4) {
        return <img src="./src/assets/cattle_y_leg.png" alt="cattle_y_leg" />;
      }
    } else if (currentLevel >= 2 && currentIndex === 1) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_h_head-chest.png" alt="cattle_h_head-chest" />;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_h_stomach.png" alt="cattle_h_stomach" />;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_h_bowels.png" alt="cattle_h_bowels" />;
      }
    }
    return null; // Fallback to avoid potential errors if no condition is met
  };

  return <>{changeCattle()}</>;
};
