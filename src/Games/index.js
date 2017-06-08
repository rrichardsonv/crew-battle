import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CharacterSelect from './CharacterSelect'
import StageSelect from './StageSelect'
import MatchDisplay from './MatchDisplay'
import TeamEntry from './TeamEntry'
import data from '../data.json'
import { matchMaker } from '../GlobalHelpers'
import { connect } from 'react-redux'
import { lockInChoice } from '../Teams/actionCreators'

class MainScreen extends Component {
  constructor (props) {
    super(props)
    this._handleCharacterPick = this._handleCharacterPick.bind(this)
    this._handleCharacterBan = this._handleCharacterBan.bind(this)
    this._handleStageSelect = this._handleStageSelect.bind(this)
    this._handleStageStrike = this._handleStageStrike.bind(this)
    this._handlePlayerEntry = this._handlePlayerEntry.bind(this)
    this._sendChoiceToState = this._sendChoiceToState.bind(this)
  }
  _sendChoiceToState (obj) {
    this.props.dispatch(lockInChoice(obj))
  }
  _handlePlayerEntry (ev) {
    ev.preventDefault()
    var entry = ev.target.children
    let allPlayers = []
    for (var i = 0; i < 6; i++) {
      allPlayers.push({
        tag: entry[i].value,
        position: entry[i].name
      })
    }
    this._sendChoiceToState({
      phase: 'enter',
      team: this.props.games.activePlayer,
      players: allPlayers
    })
  }
  _handleCharacterPick (ev) {
    ev.preventDefault()
    this._sendChoiceToState({
      phase: 'pick',
      player: this.props.games.activePlayer,
      character: ev.target.name
    })
  }
  _handleCharacterBan (ev) {
    ev.preventDefault()
    this._sendChoiceToState({
      phase: 'ban',
      team: this.props.games.activePlayer.slice(0,4),
      character: ev.target.name
    })
  }
  _handleStageSelect (ev) {
    ev.preventDefault()
    this._sendChoiceToState({
      phase: 'select',
      match: this.props.games.activePlayer.slice(4).slice(0,2),
      stage: ev.target.name
    })
  }
  _handleStageStrike (ev) {
    ev.preventDefault()
    this._sendChoiceToState({
      phase: 'strike',
      team: this.props.games.activePlayer.slice(0,4),
      stage: ev.target.name
    })
  }
  render () {
    let screen
    switch (this.props.games.gameState) {
      case 'entering':
        screen = (
          <TeamEntry
            handleEntry={this._handlePlayerEntry}
            side={this.props.games.activePlayer}
          />
        )
        break
      case 'banning':
        screen = (
          <CharacterSelect
            banned={this.props.characterBans}
            handleCharacterClick={this._handleCharacterBan}
          />
        )
        break
      case 'picking':
        screen = (
          <CharacterSelect
            banned={this.props.characterBans}
            handleCharacterClick={this._handleCharacterPick}
          />
        )
        break
      case 'selecting':
        screen = (
          <StageSelect
            banned={this.props.stageBans}
            handleStageClick={this._handleStageSelect}
          />
        )
        break
      case 'striking':
        screen = (
          <StageSelect
            banned={this.props.stageBans}
            handleStageClick={this._handleStageStrike}
          />
        )
        break
      case 'playing':
        screen = (
          <MatchDisplay
            matches={matchMaker(this.props.east, this.props.west, this.props.stages)}
          />
        )
        break
      default:
        screen = null
        break
    }
    return (
      <div className="center-display">
        <h1 className="main-heading">
          {data.displayMsgs[this.props.games.gameState]}
        </h1>
        {screen}
      </div>
    )
  }
  
}


const { func, shape, string, array, object } = PropTypes
MainScreen.propTypes = {
  dispatch: func,
  characterBans: array,
  stages: array,
  stageBans: array,
  east: object,
  west: object,
  games: shape({
    activePlayer: string,
    gameState: string
  })
}
const mapStateToProps = (state) => {
  var east = state.teams.east
  var west = state.teams.west
  return {
    east: east,
    west: west,
    stages: state.teams.stages,
    characterBans: east.characterBans.concat(west.characterBans),
    stageBans: [east.stageBan, west.stageBan],
    games: state.games
  }
}

export default connect(mapStateToProps)(MainScreen)