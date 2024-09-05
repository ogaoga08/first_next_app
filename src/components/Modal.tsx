"use client";

import React from 'react';

interface ModalProps {
  show: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { show, closeModal } = props;

  const modalArea = () => {
    if (show) {
      return (
        <>
          <div id="overlay" onClick={closeModal}></div>
          <div className="modal-area show">
            <div id="content">
              <ul>
                <li>
                  <button>場所別に見る</button>
                </li>
                <li>
                  <button>人気別に見る</button>
                </li>
                <li>
                  <button>柔らかさ別に見る</button>
                </li>
                <li>
                  <button>脂の量別に見る</button>
                </li>
              </ul>
              <button onClick={closeModal}>close</button>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return <>{modalArea()}</>;
};
