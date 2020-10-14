import React, {useState} from 'react'
import {Card} from "./Card";
import {connect} from "react-redux";
import {updateCardsComputer, updateCardsPeople} from "../../redux/reducers/loto/loto.actions";
import Scoreboard from "./Scoreboard";

const CardsList = (props) => {
  const {cardsPeople, cardsComputer, updateCardsPeople, updateCardsComputer, speedGame, gameOver} = props
  console.log('props ', props)

  const [second, setSecond] = useState(speedGame)

  const quantityCardsArr = []
  const numberToArray = () => {
    for (let i = 1; i <= props.quantityCards; i++) {
      quantityCardsArr.push(i)
    }
  }
  numberToArray()

  const startGame = () => {
    
    // идет проверка на карточках компьютера

    let i = speedGame
    let timerId = null
    while (!gameOver) {
      timerId = setInterval(() => {
        setSecond(--i)
      }, 1000);
    }

  }

  return(
    <>
      <Scoreboard/>

      <div className="row">
      <div className="col-md-6">
        {cardsPeople ? quantityCardsArr.map((_, index) => <Card
                                              cardId={index}
                                              name="people"
                                              key={Math.random()}
                                              valuesCards={cardsPeople[index]}
                                              updateCards={updateCardsPeople}
                                            />) : null}
      </div>
      <div className="col-md-6 mt-md-0 mt-3">
        {cardsComputer ? quantityCardsArr.map((_, index) => <Card
                                              className={"loto-color-border"}
                                              cardId={index}
                                              name="computer"
                                              key={Math.random()}
                                              valuesCards={cardsComputer[index]}
                                              updateCards={updateCardsComputer}
                                            />) : null}
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    quantityCards: state.lotoReducer.quantityCards,
    cardsPeople: state.lotoReducer.cardsPeople,
    cardsComputer: state.lotoReducer.cardsComputer,
    speedGame: state.lotoReducer.speedGame,
    gameOver: state.lotoReducer.gameOver
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardsPeople: (number, card) => dispatch(updateCardsPeople({number, card})),
    updateCardsComputer: (number, card) => dispatch(updateCardsComputer({number, card}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)