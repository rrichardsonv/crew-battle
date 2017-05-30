import { SET_ACTIVE_PLAYER, ADVANCE_GAME_STATE, SET_ACTIVE_MODAL, TURN_OFF_MODALS } from './actions'

export function setActivePlayer () {
  return {
    type: SET_ACTIVE_PLAYER
  }
}

export function advanceGameState () {
  return {
    type: ADVANCE_GAME_STATE
  }
}

export function setActiveModal (modal) {
  return {
    type: SET_ACTIVE_MODAL,
    currentModal: modal
  }
}


export function turnOffModals () {
  return {
    type: TURN_OFF_MODALS
  }  
}
