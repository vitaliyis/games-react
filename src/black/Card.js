import React from 'react'

export const Card = (props) => {
  const {valuesCards, updateCards, cardId} = props
  console.log('valuesCards', valuesCards)

  const getInfoCard = (number) => {
    console.log('getInfoCard => ', number, props.name, cardId)
  }

  return(
    <div className={`card-loto ${props.className}`}>
      {valuesCards ? valuesCards.map(item => {
          return (
            <div
              key={Math.random()}
              onClick={() => {
                updateCards(item, cardId)
                getInfoCard(item)}}
            >{item ? item : ''}</div>
          )
      }) : null}
    </div>
  )
}