"use client";

import { useState } from "react";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Cattle } from "../components/Cattle";
import { Navigation } from "../components/Navigation";
import { Modal } from "../components/Modal";
import { SearchBar } from "../components/SearchBar";

const list = [
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
      {
        place: "肩",
        names: [
          {
            name: "ミスジ",
            descr:
              "牛の肩の部位で、非常に柔らかく、脂肪が多い。霜降りが美しく、焼肉でも人気の部位。焼き過ぎると脂が溶けてしまうため、軽く焼くのがおすすめ。",
            softness: 4,
            fat: 4,
            rare: 4,
          },
          {
            name: "肩サンカク",
            descr:
              "牛の肩肉で、しっかりとした歯応えが特徴。適度な脂肪と旨味があり、焼肉として非常に人気がある。焼きすぎないように注意が必要。",
            softness: 3,
            fat: 3,
            rare: 3,
          },
          {
            name: "ザブトン",
            descr:
              "牛の肩ロースの一部で、非常に柔らかく脂肪が多い。特に霜降りが美しい部位で、高級焼肉として提供されることが多い。",
            softness: 5,
            fat: 5,
            rare: 5,
          },
        ],
      },
      {
        place: "背中",
        names: [
          {
            name: "サーロイン",
            descr:
              "牛の背中部分で、柔らかく脂肪が多い。適度な霜降りがあり、ステーキとしても焼肉としても人気が高い。旨味が強く、ジューシー。",
            softness: 4,
            fat: 4,
            rare: 5,
          },
          {
            name: "リブロース",
            descr:
              "牛の背中部分で、柔らかく脂肪が多い。霜降りが豊富で、焼肉やステーキとして人気。脂の旨味とジューシーさが特徴。",
            softness: 4,
            fat: 4,
            rare: 4,
          },
          {
            name: "ヒレ",
            descr:
              "牛の背中の一部で、非常に柔らかく脂肪が少ない。肉質がきめ細かく、焼肉としてもステーキとしても人気がある。あっさりとした味わい。",
            softness: 5,
            fat: 2,
            rare: 5,
          },
          {
            name: "シャトーブリアン",
            descr:
              "ヒレの中心部分で、最も柔らかく脂肪が少ない。非常に希少な部位で、高級感があり、特別な機会に提供されることが多い。",
            softness: 5,
            fat: 2,
            rare: 5,
          },
        ],
      },
      {
        place: "胸から腹",
        names: [
          {
            name: "タテバラ(カルビ)",
            descr:
              "牛の腹肉で、非常に柔らかく脂肪が多い。ジューシーで濃厚な味わいが特徴。焼肉では定番の部位で、タレとの相性も良い。",
            softness: 4,
            fat: 4,
            rare: 4,
          },
          {
            name: "カイノミ",
            descr:
              "牛の腹肉で、柔らかく脂肪が多い。焼肉として非常に人気があり、旨味が強くジューシー。軽く炙る程度で食べるのが美味しい。",
            softness: 4,
            fat: 4,
            rare: 3,
          },
          {
            name: "サンカクバラ(特上カルビ)",
            descr:
              "最上級のカルビで、非常に柔らかく脂肪が多い。霜降りが美しく、口の中でとろけるような食感が楽しめる。",
            softness: 5,
            fat: 5,
            rare: 3,
          },
        ],
      },
      {
        place: "モモ",
        names: [
          {
            name: "ランプ",
            descr:
              "サーロインの隣に位置する部位で、程よい歯応えが特徴。脂肪が少なく、ヘルシーであっさりとした味わい。",
            softness: 3,
            fat: 2,
            rare: 4,
          },
          {
            name: "イチボ",
            descr:
              "牛のモモ肉の一部で、適度な脂肪が特徴。旨味が強く、しっかりとした食感が楽しめる。焼肉では人気の部位。",
            softness: 3,
            fat: 3,
            rare: 4,
          },
          {
            name: "シキンボ",
            descr:
              "牛のモモ肉の一部で、しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わいが楽しめる。",
            softness: 3,
            fat: 2,
            rare: 3,
          },
          {
            name: "シンシン",
            descr:
              "牛のモモ肉の一部で、非常に柔らかく脂肪が少ない。きめ細かい肉質で、ヘルシーであっさりとした味わい。",
            softness: 5,
            fat: 2,
            rare: 3,
          },
        ],
      },
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
      {
        place: "胃袋あたり",
        names: [
          {
            name: "センマイ",
            descr:
              "牛の第三胃。しっかりとした歯応えが特徴。脂肪が少なく、あっさりとした味わい。独特の風味が楽しめる。",
            softness: 1,
            fat: 1,
            rare: 4,
          },
          {
            name: "ハチノス",
            descr:
              "牛の第二胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。",
            softness: 1,
            fat: 1,
            rare: 3,
          },
          {
            name: "ミノ",
            descr:
              "牛の第一胃。しっかりとした歯応えが特徴。脂肪が少なく、さっぱりとした味わい。焼き過ぎに注意。",
            softness: 2,
            fat: 2,
            rare: 3,
          },
        ],
      },
      {
        place: "下腹部あたり",
        names: [
          {
            name: "ハラミ(サガリ)",
            descr:
              "牛の横隔膜の一部で、柔らかく歯応えがある。脂肪が適度にあり、ジューシーで濃厚な味わい。",
            softness: 3,
            fat: 3,
            rare: 4,
          },
          {
            name: "レバー",
            descr:
              "牛の肝臓。ふわふわとした食感が特徴。ビタミンAや鉄分が豊富で栄養価が高い。軽く炙る程度で食べるのが美味しい。",
            softness: 5,
            fat: 2,
            rare: 4,
          },
          {
            name: "ヒモ(マルチョウ)",
            descr:
              "牛の小腸。脂とぷりぷりとした食感が特徴。非常にジューシーで、焼肉では人気の部位。",
            softness: 4,
            fat: 5,
            rare: 3,
          },
          {
            name: "シマチョウ",
            descr:
              "牛の大腸。しっかりとした歯応えが特徴。脂が多く、濃厚な旨味が楽しめる。",
            softness: 3,
            fat: 5,
            rare: 3,
          },
          {
            name: "マメ",
            descr:
              "牛の腎臓。しっかりとした歯応えが特徴。脂肪が適度にあり、旨味が強い。焼き過ぎに注意。",
            softness: 2,
            fat: 3,
            rare: 3,
          },
        ],
      },
    ],
  },
];

export const Home = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSubIndex, setCurrentSubIndex] = useState(null);
  const [currentReserveIndex, setCurrentReserveIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleButtonClick = (index) => {
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

  const ratingStar = (rating) => {
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

  // console.log(`currentLevel : ${currentLevel}`);
  // console.log(`currentIndex : ${currentIndex}`);
  // console.log(`currentSubIndex : ${currentSubIndex}`);

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
            <SearchBar
            />
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
