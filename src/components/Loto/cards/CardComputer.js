import React from 'react'

const CardComputer = (props) => {
  const {valuesCards} = props
  // console.log('CardComputer valuesCards', valuesCards)

  return(
    <div className="card-loto loto-color-border">
      {valuesCards ? valuesCards.map(item => {
        return (
          <div key={Math.random()}>{item ? item : ''}</div>
        )
      }) : null}
    </div>
  )
}

export default CardComputer