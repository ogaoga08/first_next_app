"use client";

import { useState } from "react";
// import "../styles/globals.css";
import { Header } from "../components/Header";
import { Cattle } from "../components/Cattle";
import { Navigation } from "../components/Navigation";
import { Modal } from "../components/Modal";
import { SearchBar } from "../components/SearchBar";

interface MeatName {
  name: string;
  descr: string;
  softness: number;
  fat: number;
  rare: number;
}

interface MeatPlace {
  place: string;
  names: MeatName[];
}

interface MeatType {
  type: string;
  places: MeatPlace[];
}

const list: MeatType[] = [
  {
    type: "焼肉",
    places: [
      {
        place: "頭から首",
        names: [
          {
            name: "タン",
            descr:
              "牛の舌。脂肪分が多く、ほどよい歯応えと独特の食感がある。ビタミンB群が豊富に含まれている。火を通しすぎると硬くなるため、さっと炙るように焼くのが良い。",
            softness: 1,
            fat: 3,
            rare: 5,
          },
          {
            name: "ネック",
            descr:
              "牛の首。程よい脂肪が特徴で、歯応えがありつつもジューシー。タンよりも脂肪が少ないため、あっさりと食べられる。",
            softness: 2,
            fat: 2,
            rare: 3,
          },
        ],
      },
      // 他の部位も同様に定義されます
    ],
  },
  {
    type: "ホルモン",
    places: [
      {
        place: "頭・胸あたり",
        names: [
          {
            name: "ハツ",
            descr:
              "牛の心臓。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。鉄分が豊富で栄養価が高い。",
            softness: 1,
            fat: 1,
            rare: 5,
          },
          {
            name: "ツラミ",
            descr:
              "牛のほほ肉で、しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わいが楽しめる。",
            softness: 2,
            fat: 2,
            rare: 3,
          },
          {
            name: "ウルテ",
            descr:
              "牛の喉の気管軟骨。非常に歯応えがあり、独特の食感が楽しめる。脂肪が少なく、ヘルシー。",
            softness: 1,
            fat: 1,
            rare: 3,
          },
          {
            name: "シビレ",
            descr:
              "牛の膵臓。ぷりぷりとした食感が特徴。脂肪が適度にあり、旨味が強い。焼きすぎないように注意。",
            softness: 3,
            fat: 3,
            rare: 3,
          },
        ],
      },
      // 他の部位も同様に定義されます
    ],
  },
];

export const Home = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentSubIndex, setCurrentSubIndex] = useState<number | null>(null);
  const [currentReserveIndex, setCurrentReserveIndex] = useState<number | null>(null);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleButtonClick = (index: number) => {
    if (currentLevel === 0) {
      setCurrentLevel(1);
      setCurrentIndex(index);
    } else if (currentLevel === 1) {
      setCurrentLevel(2);
      setCurrentSubIndex(index);
    } else if (currentLevel === 2) {
      setCurrentLevel(3);
      setCurrentReserveIndex(index);
    }
  };

  const handleBackButtonClick = () => {
    if (currentLevel === 3) {
      setCurrentReserveIndex(null);
      setCurrentLevel(currentLevel - 1);
    } else if (currentLevel === 2) {
      setCurrentSubIndex(null);
      setCurrentLevel(currentLevel - 1);
    } else if (currentLevel === 1) {
      setCurrentIndex(null);
      setCurrentLevel(currentLevel - 1);
    }
  };

  const ratingStar = (rating: number) => {
    if (rating === 1) {
      return "★☆☆☆☆";
    } else if (rating === 2) {
      return "★★☆☆☆";
    } else if (rating === 3) {
      return "★★★☆☆";
    } else if (rating === 4) {
      return "★★★★☆";
    } else if (rating === 5) {
      return "★★★★★";
    }
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <>
      <Header openModal={handleOpenModal} />
      <Modal show={modalShow} closeModal={handleCloseModal} />
      <main>
        <div className="main-container">
          <div className="cattle-area">
            <Cattle
              currentLevel={currentLevel}
              currentIndex={currentIndex}
              currentSubIndex={currentSubIndex}
            />
          </div>
          <div className="search-area">
            <SearchBar />
          </div>
          <div className="cut-of-meat-area">
            <Navigation
              currentLevel={currentLevel}
              currentIndex={currentIndex}
              currentSubIndex={currentSubIndex}
              currentReserveIndex={currentReserveIndex}
              list={list}
              handleButtonClick={handleButtonClick}
              ratingStar={ratingStar}
            />
          </div>
          <div className="back-button-area">
            {currentLevel > 0 && (
              <button onClick={handleBackButtonClick}>戻る</button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
