import React from 'react'
import CardPeople from "./CardPeople";
import CardComputer from "./CardComputer";

const CardsList = props => {
  const {cardsPeople, cardsComputer, quantityCardsArr, checkCardPeople} = props
  return(
    <div className="row">
      <div className="col-md-6">
        {cardsPeople ? quantityCardsArr.map((_, index) => <CardPeople
          cardId={index}
          name="people"
          key={Math.random()}
          valuesCards={cardsPeople[index]}
          checkCardPeople={checkCardPeople}
        />) : null}
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        {cardsComputer ? quantityCardsArr.map((_, index) => <CardComputer
          name="computer"
          key={Math.random()}
          valuesCards={cardsComputer[index]}
        />) : null}
      </div>
    </div>
  )
}

export default CardsList