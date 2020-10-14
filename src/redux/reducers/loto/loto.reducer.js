import {getCards} from "../../../utils/createRandomCard";
import {
  SET_CARDS_COMPUTER, SET_CARDS_PEOPLE,
  SET_QUANTITY_CARDS, SET_SPEED_GAME, SET_START_GAME, UPDATE_CARDS_COMPUTER,
  UPDATE_CARDS_PEOPLE, UPDATE_GAME_OVER
} from "./loto.types";

const initialState = {
  quantityCards: 1,
  speedGame: 3,
  startGame: false,
  gameOver: false,
  cardsPeople: [],
  cardsComputer: [],
  winner: null,
  randomNumber: null
}

const updateCardsPeople = (cards, number, card) => {
  let result = []
  for (let i = 0; i < cards.length; i++) {
    result.push(cards[i].map(item => item === number && i === card ? 0 : item))
  }
  // console.log('result => ', result)
  return result
}

const updateCardsComputer = (cards, number) => {
  let result = []
  for (let i = 0; i < cards.length; i++) {
    result.push(cards[i].map(item => item === number ? 0 : item))
  }
  // console.log('updateCardsComputer result => ', result)
  return result
}

const checkOnEmptyCards = cards => {
  if (cards.every(item => item.every(item => item === 0))) {
    // console.log('Game over!!!')
    return true
  }
  return false
}

const checkMissedNumber = (cards, number) => {
  return cards.some(item => item.some(item => item === number))
}

const lotoReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case SET_QUANTITY_CARDS:
      return {
        ...state,
        quantityCards: payload
      }

    case SET_SPEED_GAME:
      return {
        ...state,
        speedGame: payload
      }

    case SET_START_GAME:
      return {
        ...state,
        startGame: payload
      }

    case UPDATE_CARDS_PEOPLE:
      const cardsForPeople = updateCardsPeople(state.cardsPeople, payload.number, payload.card)
      return {
        ...state,
        cardsPeople: cardsForPeople,
        gameOver: checkOnEmptyCards(cardsForPeople),
        winner: checkOnEmptyCards(cardsForPeople) ? 'Вы победили!' : null
      }

    case UPDATE_CARDS_COMPUTER:
      const cardsForComputer = updateCardsComputer(state.cardsComputer, payload)

      let localGameOver = checkOnEmptyCards(cardsForComputer)
      if (!localGameOver) {
        localGameOver = checkMissedNumber(state.cardsPeople, state.randomNumber)
      }

      let localWinner = checkOnEmptyCards(cardsForComputer) ? 'Вы проиграли!' : null
      if (!localWinner) {
        localWinner = checkMissedNumber(state.cardsPeople, state.randomNumber) ? 'Вы проиграли!' : null
      }

      return {
        ...state,
        cardsComputer: cardsForComputer,
        randomNumber: payload,
        gameOver: localGameOver,
        winner: localWinner
        // gameOver: checkOnEmptyCards(cardsForComputer),
        // winner: checkMissedNumber(state.cardsPeople, state.randomNumber) ? 'Вы проиграли!' : null
        // winner: checkOnEmptyCards(cardsForComputer) ? 'Вы проиграли!' : null
      }

    case SET_CARDS_PEOPLE:
      return {
        ...state,
        cardsPeople: getCards(payload)
      }

    case SET_CARDS_COMPUTER:
      return {
        ...state,
        cardsComputer: getCards(payload)
      }

    case UPDATE_GAME_OVER:
      return {
        ...state,
        gameOver: payload
      }

    default:
      return state
  }
}

export default lotoReducer