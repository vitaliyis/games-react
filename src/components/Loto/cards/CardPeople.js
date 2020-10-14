import React from 'react'

const CardPeople = (props) => {
  const {valuesCards, checkCardPeople, cardId} = props
  // console.log('valuesCards', valuesCards)

  return(
    <div className="card-loto card-loto-people">
      {valuesCards ? valuesCards.map(item => {
          return (
            <div
              key={Math.random()}
              onClick={() => {checkCardPeople(item, cardId)}}
            >{item ? item : ''}</div>
          )
      }) : null}
    </div>
  )
}

export default CardPeople