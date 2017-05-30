import { SET_ACTIVE_PLAYER, ADVANCE_GAME_STATE, SET_ACTIVE_MODAL, TURN_OFF_MODALS } from './actions'


const DEFAULT_STATE = {
  gameState: 'entering',
  activePlayer: 'easts1',
  lastPlayer: false,
  currentModal: 'intro',
  modalsOn: true
}

const banOrder = Object.freeze([
  'westd2a',
  'eastd2a',
  'westd2b',
  'eastd2b' 
])

const pickOrder = Object.freeze([
  'wests1',
  'easts1',
  'eastd1a',
  'eastd1b',
  'westd1a',
  'westd1b',
  'westd2a',
  'westd2b',
  'eastd2a',
  'eastd2b',
  'easts2',
  'wests2'
])

const strikeOrder = Object.freeze([
  'wests2',
  'easts2'
])

const selectOrder = Object.freeze([
  'easts1',
  'westd1a',
  'eastd2a',
  'wests2'
])

const phaseOrder = Object.freeze([
  'entering',
  'banning',
  'picking',
  'striking',
  'selecting',
  'playing'
])
const entryOrder = Object.freeze([
  'easts1',
  'eastd1a',
  'eastd1b',
  'eastd2a',
  'eastd2b',
  'easts2',
  'wests1',
  'westd1a',
  'westd1b',
  'westd2a',
  'westd2b',
  'wests2'
])

const playerOrder = Object.freeze({
  entering: entryOrder,
  banning: banOrder,
  picking: pickOrder,
  striking: strikeOrder,
  selecting: selectOrder,
  playing: [null]
})

const setActiveModal = (state, action) => {
  const newGameState = {}
  Object.assign(newGameState, state, {
    currentModal: action.currentModal
  })
  return newGameState
}
const turnOffModals = (state, action) => {
  const newGameState = {}
  Object.assign(newGameState, state, {
    currentModal: null,
    modalsOn: false
  })
  return newGameState
}


const setActivePlayer = (state, action) => {
  const newGameState = {}
  var currentPhase = playerOrder[state.gameState]
  var nextIndex = currentPhase.indexOf(state.activePlayer) + 1
  if (nextIndex === currentPhase.length - 1) {
    Object.assign(newGameState, state, {
      activePlayer: currentPhase[nextIndex],
      lastPlayer: true
    })
  } else {
    Object.assign(newGameState, state, {
      activePlayer: currentPhase[nextIndex]
    })
  }
  return newGameState
}

const advanceGameState = (state, action) => {
  const newGameState = {}
  var nextPhase = phaseOrder[phaseOrder.indexOf(state.gameState) + 1]
  Object.assign(newGameState, state, {
    lastPlayer: false,
    gameState: nextPhase,
    activePlayer: playerOrder[nextPhase][0]
  })
  return newGameState
}

const games = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_MODAL:
      if (state.modalsOn) {
        return setActiveModal(state, action)
      } else {
        return state
      }
    case TURN_OFF_MODALS:
      return turnOffModals(state, action)
    case SET_ACTIVE_PLAYER:
      console.log(state)
      let gameResponse
      if (state.lastPlayer) {
        gameResponse = (advanceGameState(state, action))
      } else {
        gameResponse = (setActivePlayer(state, action))
      }
      return gameResponse
    case ADVANCE_GAME_STATE:
      return advanceGameState(state, action)
    default:
      return state
  }
}

export default games