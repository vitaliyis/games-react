import {
  SET_CARDS_COMPUTER,
  SET_CARDS_PEOPLE,
  SET_QUANTITY_CARDS, SET_SPEED_GAME, SET_START_GAME, UPDATE_CARDS_COMPUTER,
  UPDATE_CARDS_PEOPLE, UPDATE_GAME_OVER
} from "./loto.types";

export const setQuantityCards = payload => {
  return {
    type: SET_QUANTITY_CARDS,
    payload
  }
}

export const setSpeedGame = payload => {
  return {
    type: SET_SPEED_GAME,
    payload
  }
}

export const setStartGame = payload => {
  return {
    type: SET_START_GAME,
    payload
  }
}

export const updateCardsPeople = payload => {
  console.log('payload', payload)
  return {
    type: UPDATE_CARDS_PEOPLE,
    payload
  }
}

export const updateCardsComputer = payload => {
  return {
    type: UPDATE_CARDS_COMPUTER,
    payload
  }
}

export const updateGameOver = payload => {
  return {
    type: UPDATE_GAME_OVER,
    payload
  }
}

export const setCardsPeople = payload => {
  console.log('payload', payload)
  return {
    type: SET_CARDS_PEOPLE,
    payload
  }
}

export const setCardsComputer = payload => {
  return {
    type: SET_CARDS_COMPUTER,
    payload
  }
}