import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {
  updateCardsComputer,
  updateCardsPeople, updateGameOver
} from "../../../redux/reducers/loto/loto.actions";
import Scoreboard from "../Scoreboard";
import {randomInteger} from "../../../utils/createRandomCard";
import ModalGameOver from "../modals/ModalGameOver";
import CardsList from "./CardsList";
import {beep} from "../../../utils/sound";

const CardsContainer = (props) => {
  const {cardsPeople, cardsComputer, updateCardsPeople, setStartGame,
    updateCardsComputer, speedGame, gameOver, updateGameOver, winner} = props

  const [second, setSecond] = useState(speedGame)
  const [randomNumber, setRandomNumber] = useState(randomInteger(1, 90))
  const [timerId, setTimerId] = useState(null)

  const quantityCardsArr = []
  const numberToArray = () => {
    for (let i = 1; i <= props.quantityCards; i++) {
      quantityCardsArr.push(i)
    }
  }
  numberToArray()

  const checkCardPeople = (value, id) => {
    if (value === randomNumber) {
      beep(303, 'square', 0.15, 70)
      updateCardsPeople(value, id)
    }
  }

  const startGame = () => {
    // идет проверка на карточках компьютера
    beep(1127, 'square', 0.15, 70)
    updateCardsComputer(randomNumber)
    const usedNumber = []
    usedNumber.push(randomNumber)
    let i = speedGame
    let tempNumber = randomNumber
    const localTimerId = setInterval(
      () => {
        if (i - 1 === speedGame) {
          while (usedNumber.some(item => item === tempNumber)) {
            tempNumber = randomInteger(1, 90)
          }
          usedNumber.push(tempNumber)
          // console.log('usedNumber => ', usedNumber)
          updateCardsComputer(tempNumber)
          setRandomNumber(tempNumber)
          beep(1127, 'square', 0.15, 70)
        }
        setSecond(--i)
        if (!i) {
          i = speedGame + 1
        }
      }
      , 1000);
    setTimerId(localTimerId)
    return localTimerId
  }

  // const tripleSound = () => {
  //   beep(200, 'square', 0.15, 70)
  //   setTimeout(() => beep(250, 'square', 0.15, 70), 150)
  //   setTimeout(() => beep(303, 'square', 0.15, 70), 300)
  // }

  useEffect(() => {
    const timer = startGame()
    return () => {
      clearInterval(timer)
      setStartGame(false)
    }
  }, [])


  const resetGame = () => {
    clearInterval(timerId)
    if (!gameOver) {
      setStartGame(false)
      return
    }
    setTimeout(() => beep(218, 'square', 0.15, 700), 500)
  }


  return(
    <>
      <Scoreboard
        second={second}
        randomNumber={randomNumber}
        resetGame={resetGame}
      />
      <CardsList
        cardsPeople={cardsPeople}
        quantityCardsArr={quantityCardsArr}
        cardsComputer={cardsComputer}
        checkCardPeople={checkCardPeople}
      />
      {gameOver ? resetGame() : null}
      {gameOver ?
        <ModalGameOver
        winner={winner}
        updateGameOver={updateGameOver}
        setStartGame={setStartGame}
      /> : null}

    </>
  )
}

const mapStateToProps = (state) => {

  return {
    quantityCards: state.lotoReducer.quantityCards,
    cardsPeople: state.lotoReducer.cardsPeople,
    cardsComputer: state.lotoReducer.cardsComputer,
    speedGame: state.lotoReducer.speedGame,
    gameOver: state.lotoReducer.gameOver,
    winner: state.lotoReducer.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardsPeople: (number, card) => dispatch(updateCardsPeople({number, card})),
    updateCardsComputer: number => dispatch(updateCardsComputer(number)),
    updateGameOver: value => dispatch(updateGameOver(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)