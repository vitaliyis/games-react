import React from 'react'

const Scoreboard = props => {
  const {second, resetGame, randomNumber} = props
  return (
    <div className="scoreboard-loto">
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-secondary btn-sm"
          onClick={resetGame}
        >Сброс игры</button>
        <div className="d-flex align-items-center">
          <div className="mr-sm-5 mr-3">Таймер:</div>
          <div className="scoreboard-loto-time">{second}</div>
        </div>
        <div className="d-flex align-items-center">
          <div className="mr-sm-5 mr-3">Число:</div>
          <div className="scoreboard-loto-number">{randomNumber}</div>
        </div>
        <button
          className="btn btn-primary btn-sm invisible d-none d-sm-block"
        >Сброс игры</button>
      </div>
    </div>
  )
}

export default Scoreboard