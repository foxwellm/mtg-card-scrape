import React, { useEffect, useState } from "react";

const DisplayCard: React.FC = ({ currentCard, updateCard }: any) => {
  const [shouldHide, setShouldHide] = useState(true);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    setShouldHide(true);
  }, [currentCard]);

  const clipPathValue = shouldHide
    ? "polygon(0 0, 100% 0, 100% 55%, 0 55%)"
    : undefined;

  const handleKeyPress = (e: any) => {
    // Check if the pressed key is the right arrow key
    if (e.key === "ArrowRight") {
      if (shouldHide) {
        setShouldHide(false);
      }
    }
    if (e.key === "ArrowUp") {
      updateCard();
    }
    if (e.key === "ArrowDown") {
      updateCard();
    }
  };

  return (
    <div
      onKeyDown={handleKeyPress}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height: "100vh",
        // backgroundColor: "#f0f0f0",
      }}
    >
      {currentCard && (
        <img
          src={currentCard.imageSrc}
          alt="My Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: clipPathValue,
          }}
        />
      )}
    </div>
  );
};

export default DisplayCard;

// .fullscreen-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh; /* 100% of the viewport height */
//   background-color: #f0f0f0; /* Set a background color if needed */
// }
