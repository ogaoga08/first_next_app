"use client";

export const Header = (props) => {
  const { openModal } = props;
  return (
    <header>
      <div className="header">
        <h2>myv</h2>
        <button onClick={openModal}>=</button>
      </div>
    </header>
  );
};
