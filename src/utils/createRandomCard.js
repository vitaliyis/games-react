const getRandomColumns = () => {
  const quantityColumnsCard = []
  let count6 = 0
  let count3 = 0

  for (let i = 0; i < 9; i++) {
    let value = Math.ceil(Math.random()*2)
    value === 1 ? count3++ : count6++
    value = count3 > 3 ? 2 : value
    value = count6 > 6 ? 1 : value
    quantityColumnsCard.push(value)
  }
  // console.log('quantityColumnsCard ', quantityColumnsCard)
  return quantityColumnsCard
}

const getRandomItems = (condition) => {
  let quanityZero = null
  let quanityOne = null

  if (condition === 1) {
    quanityZero = 2
    quanityOne = 1
  } else {
    quanityZero = 1
    quanityOne = 2}

  const itemsCard = []
  let count0 = 0
  let count1 = 0

  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random()*2)   // либо 0 либо 1
    value === 0 ? count0++ : count1++
    value = count0 > quanityZero ? 1 : value
    value = count1 > quanityOne ? 0 : value
    // count0 > quanityZero ? value = 1 : value = value
    // count1 > quanityOne ? value = 0 : value = value
    itemsCard.push(value)
  }
  return itemsCard
}

const getRandomCardMap = () => {
  const result = []
  const quantityColumnsCard = getRandomColumns()
  quantityColumnsCard.forEach(item => {
    item === 1 ? result.push(getRandomItems(1)) : result.push(getRandomItems(2))
  })

  // трансформируем массив массивов в один массив
  const newResult = []
  result.forEach(item => {
    item.forEach(item => {
      newResult.push(item)
    })
  })

  return newResult
}

export const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const transformForCard = (card) => {
  const map = [0, 9, 18, 1, 10, 19, 2, 11, 20, 3, 12, 21, 4, 13, 22,
    5, 14, 23, 6, 15, 24, 7, 16, 25, 8, 17, 26]
  const newCard = []
  card.forEach((item, index) => {
    newCard[map[index]] = item
  })
  // console.log('newCard ', newCard)
  return newCard
}

const getRandomCard = () => {
  const bag = []

  const randomIntegerWithoutRepeat = (from, to) => {
    let number = randomInteger(from, to)
    while(bag.some(element => element === number)) {
      number = randomInteger(from, to)
    }

    bag.push(number)
    return number

  }

  const card =  getRandomCardMap().map((item, index) => {
    if (item === 1 && index >= 0 && index < 3) {return randomIntegerWithoutRepeat(1, 9)}
    if (item === 1 && index >= 3 && index < 6) {return randomIntegerWithoutRepeat(10, 19)}
    if (item === 1 && index >= 6 && index < 9) {return randomIntegerWithoutRepeat(20, 29)}
    if (item === 1 && index >= 9 && index < 12) {return randomIntegerWithoutRepeat(30, 39)}
    if (item === 1 && index >= 12 && index < 15) {return randomIntegerWithoutRepeat(40, 49)}
    if (item === 1 && index >= 15 && index < 18) {return randomIntegerWithoutRepeat(50, 59)}
    if (item === 1 && index >= 18 && index < 21) {return randomIntegerWithoutRepeat(60, 69)}
    if (item === 1 && index >= 21 && index < 24) {return randomIntegerWithoutRepeat(70, 79)}
    if (item === 1 && index >= 24 && index < 27) {return randomIntegerWithoutRepeat(80, 90)}

    return 0
  })
  // console.log('card ', card)

  return transformForCard(card)
}

export const getCards = (quantity) => {
  let result = []
  for (let i = 0; i < quantity; i++) {
    result = [...result, getRandomCard()]
  }
  return result
}