import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Player from './Player'
import data from '../data.json'

class Team extends Component {
  render () {
    const positions = data.positions
    const team = this.props.teams[this.props.side]
    let playerz = []
    for(var i = 0; i<6; i++){
      var currentPosition = `${this.props.side}${positions[i]}`
        playerz.push((
          <Player
            player={team.players[i]}
            position={currentPosition}
            match={data.matches[i]}
          />
        ))
    }
    return (
      <div className="team-wrapper">
        {playerz.map((player) => player)}
      </div>
    )
  }
}
const { shape, object, string } = PropTypes
Team.propTypes = {
  side: string,
  teams: shape({
    east: object,
    west: object
  })
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps)(Team)

