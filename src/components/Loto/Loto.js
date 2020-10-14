import React from 'react'
import {connect} from 'react-redux'
import CardsContainer from "./cards/CardsContainer";
import {
  setCardsComputer, setCardsPeople, setQuantityCards, setSpeedGame,
  setStartGame
} from "../../redux/reducers/loto/loto.actions";

const Loto = (props) => {
  const {quantityCards, speedGame, startGame, setQuantityCards,
    setSpeedGame, setStartGame, setCardsPeople, setCardsComputer} = props

  const quantityCardsSelect = [1, 2]
  const speedGameSelect = [1, 2, 3, 4, 5]

  const onChange = event => {
    switch (event.target.name) {
      case "quantityCard":
        setQuantityCards(Number(event.target.value))
        break

      case "speedGame":
        setSpeedGame(Number(event.target.value))
        break

      default: break
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStartGame(true)
    setCardsPeople(quantityCards)
    setCardsComputer(quantityCards)
  }


  return(
    <div className="loto-wrap">
      {/*<ModalGameOver/>*/}
      {!startGame ?
      <div className="card mt-5 ml-auto mr-auto">
        <h5 className="card-header">Сделайте выбор</h5>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="quantityCard" className="col-sm-6 col-form-label">Количество карточек:</label>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  id="quantityCard"
                  name="quantityCard"
                  onChange={onChange}
                  value={quantityCards}
                >{quantityCardsSelect.map(item => <option key={Math.random()}>{item}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="speedGame" className="col-sm-6 col-form-label">Скорость игры (в секундах):</label>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  id="speedGame"
                  name="speedGame"
                  onChange={onChange}
                  value={speedGame}
                >{speedGameSelect.map(item => <option key={Math.random()}>{item}</option>)}
                </select>
              </div>
            </div>
            <button
              className="btn btn-primary w-100 mt-4"
              onClick={onSubmit}
            >Начать игру</button>
          </form>

        </div>
      </div> : <CardsContainer setStartGame={setStartGame}/>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quantityCards: state.lotoReducer.quantityCards,
    speedGame: state.lotoReducer.speedGame,
    startGame: state.lotoReducer.startGame
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setQuantityCards: data => dispatch(setQuantityCards(data)),
    setSpeedGame: data => dispatch(setSpeedGame(data)),
    setStartGame: data => dispatch(setStartGame(data)),
    setCardsPeople: quanityCards => dispatch(setCardsPeople(quanityCards)),
    setCardsComputer: quantityCards => dispatch(setCardsComputer(quantityCards))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loto)