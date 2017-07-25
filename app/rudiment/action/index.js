const SING = 'SING'
const DANCE = 'DANCE'
const HOP = 'HOP'

export const sing = () => {
  return {
    type: SING,
    result: 'It is singing!'  
  }
}

export const dance = () => {
  return {
    type: DANCE,
    result: 'It is dancing!'  
  }
}

export const hop = () => {
  return {
    type: HOP,
    result: 'It is hopping!'  
  }
}