import { useState, useEffect } from "react";
import { useDatabase } from "./hooks/useDatabase";
import DisplayCard from "./components/DisplayCard";
import common from "../../MKM/common2.json";

function getCardSet() {}

const App = () => {
  console.log("in");
  const { currentCard, updateCard } = useDatabase();
  // const [studyCards, setStudyCards] = useState(null);
  // const [cardIndex, setCardIndex] = useState(0);
  // console.log("🚀 ~ App ~ cardIndex:", cardIndex)

  // useEffect(() => {
  //   console.log('componentMount')
  //   const newCardSet = Object.values(common).filter((card) => {
  //     if (card.diff < 1) return true;
  //     return false;
  //   });
  //   setStudyCards(newCardSet);
  // }, []);

  // function nextCard(isCorrect: boolean) {
  //   console.log("🚀 ~ nextCard ~ isCorrect:", isCorrect);
  //   // TODO: update card
  //   const nextCardsIndex = cardIndex + 1;
  //   if (nextCardsIndex < studyCards.length) {
  //     setCardIndex(nextCardsIndex);
  //   }
  // }

  // const name: any = studyCards?.[cardIndex]?.name;

  return (
    <>
      {currentCard && <DisplayCard currentCard={currentCard} updateCard={updateCard} />}
      {/* {cards ? (
        <pre>{JSON.stringify(cards, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )} */}
    </>
  );
};

export default App;
