import { ADD_TEAM_MEMBER, ADD_TEAM_CHARACTER_BAN, ADD_TEAM_STAGE_BAN, ADD_TEAM_STAGE_CHOICE, ADD_TEAM_CHARACTER_CHOICE } from './actions'

const DEFAULT_STATE = {
  east: {
    players:[],
    characters: [],
    characterBans:[],
    stageBan: ''
  },
  west: {
    players:[],
    characters: [],
    characterBans:[],
    stageBan: ''
  },
  stages: []
}

const modifyAppropriateTeam = (state, action, newTeam) => {
  const newState = {}
  if (action.teamId === 'west') {
    Object.assign(newState, state, {west: newTeam})
  } else if (action.teamId === 'east') {
    Object.assign(newState, state, {east: newTeam})
  }
  return newState
}

const addTeamMember = (state, action) => {
  const newTeam = {}
  Object.assign(newTeam, state[action.teamId], {
    players: state[action.teamId].players.concat(action.player)
  })
  return modifyAppropriateTeam(state, action, newTeam)
}

const addTeamCharacterBan = (state, action) => {
  const newTeam = {}
  Object.assign(newTeam, state[action.teamId], {
    characterBans: state[action.teamId].characterBans.concat(action.ban)
  })
  return modifyAppropriateTeam(state, action, newTeam)
}

const addTeamStageBan = (state, action) => {
  const newTeam = {}
  Object.assign(newTeam, state[action.teamId], {
    stageBan: action.ban
  })
  return modifyAppropriateTeam(state, action, newTeam)
}

const addTeamStageChoice = (state, action) => {
  const newStageState = {}
  Object.assign(newStageState, state, {
    stages: state.stages.concat({stage: action.stage, match: action.match})
  })
  return newStageState
}

const addTeamCharacterChoice = (state, action) => {
  console.log('in the right place')
  const newTeam = {}
  Object.assign(newTeam, state[action.teamId], {
    characters: state[action.teamId].characters.concat(action.character)
  })
  return modifyAppropriateTeam(state, action, newTeam)
}


const teams = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case ADD_TEAM_MEMBER:
      return addTeamMember(state, action)
    case ADD_TEAM_CHARACTER_BAN:
      return addTeamCharacterBan(state, action)
    case ADD_TEAM_STAGE_CHOICE:
      return addTeamStageChoice(state, action)
    case ADD_TEAM_STAGE_BAN:
      return addTeamStageBan(state, action)
    case ADD_TEAM_CHARACTER_CHOICE:
      return addTeamCharacterChoice(state, action)
    default:
      return state
  }
}

export default teams
