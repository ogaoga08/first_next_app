"use client";

export const Navigation = (props) => {
  const {
    currentLevel,
    currentIndex,
    currentSubIndex,
    currentReserveIndex,
    handleButtonClick,
    list,
    ratingStar,
  } = props;
  const displayButtons = () => {
    if (currentLevel === 0) {
      return list.map((categoryChoice, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {categoryChoice.type}
        </button>
      ));
    } else if (currentLevel === 1 && currentIndex !== null) {
      return list[currentIndex].places.map((placeChoice, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {placeChoice.place}
        </button>
      ));
    } else if (
      currentLevel === 2 &&
      currentSubIndex !== null &&
      currentIndex !== null
    ) {
      return list[currentIndex].places[currentSubIndex].names.map(
        (nameChoice, index) => (
          <div key={index}>
            <button key={index} onClick={() => handleButtonClick(index)}>
              {nameChoice.name}
            </button>
          </div>
        )
      );
    } else if (
      currentLevel === 3 &&
      currentSubIndex !== null &&
      currentIndex !== null
    ) {
      const detailChoice =
        list[currentIndex].places[currentSubIndex].names[currentReserveIndex];
      return (
        <div className="description-area">
          <h1>{detailChoice.name}</h1>
          <p>{detailChoice.descr}</p>
          <h4>
            <li>柔らかさ: {ratingStar(detailChoice.softness)}</li>
            <li>脂の量 : {ratingStar(detailChoice.fat)}</li>
            <li>希少度 : {ratingStar(detailChoice.rare)}</li>
          </h4>
        </div>
      );
    }
  };
  return <>{displayButtons()}</>;
};
