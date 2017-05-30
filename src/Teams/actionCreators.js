import { ADD_TEAM_MEMBER, ADD_TEAM_CHARACTER_BAN, ADD_TEAM_STAGE_BAN, ADD_TEAM_CHARACTER_CHOICE, ADD_TEAM_STAGE_CHOICE } from './actions'
import { setActivePlayer } from '../Games/actionCreators'

export function addTeamMember (id, player) {
  return {
    type: ADD_TEAM_MEMBER,
    teamId: id,
    player: player
  }
}

export function addTeamCharacterBan (id, character) {
  return {
    type: ADD_TEAM_CHARACTER_BAN,
    teamId: id,
    ban: character
  }
}

export function addTeamStageBan (id, stage) {
  return {
    type: ADD_TEAM_STAGE_BAN,
    teamId: id,
    ban: stage
  }
}
export function addTeamStageChoice (match, stage) {
  return {
    type: ADD_TEAM_STAGE_CHOICE,
    match: match,
    stage: stage
  }
}

export function addTeamCharacterChoice (player, character) {
  return {
    type: ADD_TEAM_CHARACTER_CHOICE,
    teamId: player.slice(0,4),
    character: {player: player, character: character}
  }
}

export function lockInChoice (args) {
  switch (args.phase) {
    case 'enter':
      return function (dispatch, getState) {
        dispatch(addTeamMember (args.team, args.player))
        dispatch(setActivePlayer())
      }
    case 'pick':
      return function (dispatch, getState) {
        dispatch(addTeamCharacterChoice(args.player, args.character))
        dispatch(setActivePlayer())
      }
    case 'ban':
      return function (dispatch, getState) {
        dispatch(addTeamCharacterBan(args.team, args.character))
        dispatch(setActivePlayer())
      }
    case 'strike':
      return function (dispatch, getState) {
        dispatch(addTeamStageBan(args.team, args.stage))
        dispatch(setActivePlayer())
      }
    case 'select':
      return function (dispatch, getState) {
        dispatch(addTeamStageChoice(args.match, args.stage))
        dispatch(setActivePlayer())
      }
    default:
      return {
        type: 'DEFAULT_CASE'
      }
  }
  
}
