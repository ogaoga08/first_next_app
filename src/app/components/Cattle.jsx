"use client";

export const Cattle = (props) => {
  const { currentLevel, currentIndex, currentSubIndex } = props;
  const changeCattle = () => {
    if (currentLevel === 0) {
      return <img src="./src/assets/cattle.png"></img>;
    } else if (currentLevel == 1 && currentIndex === 0) {
      return <img src="./src/assets/cattle_y.png"></img>;
    } else if (currentLevel == 1 && currentIndex === 1) {
      return <img src="./src/assets/cattle_h.png"></img>;
    } else if (currentLevel >= 2 && currentIndex === 0) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_y_head.png"></img>;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_y_shoulder.png"></img>;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_y_back.png"></img>;
      } else if (currentSubIndex === 3) {
        return <img src="./src/assets/cattle_y_stomach.png"></img>;
      } else if (currentSubIndex === 4) {
        return <img src="./src/assets/cattle_y_leg.png"></img>;
      }
    } else if (currentLevel >= 2 && currentIndex === 1) {
      if (currentSubIndex === 0) {
        return <img src="./src/assets/cattle_h_head-chest.png"></img>;
      } else if (currentSubIndex === 1) {
        return <img src="./src/assets/cattle_h_stomach.png"></img>;
      } else if (currentSubIndex === 2) {
        return <img src="./src/assets/cattle_h_bowels.png"></img>;
      }
    }
  };
  return <>{changeCattle()}</>;
};
