import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
  render () {
    const { player, teams, position, match } = this.props
    let ifActive
    if (this.props.activePlayer === position) {
      ifActive = 'active'
    } else {
      ifActive = null
    }
    const character = teams[position.slice(0, 4)].characters.find((cha) => cha.player === position)
    return (
      <div className={`team-member ${ifActive}`}>
        <div className="player-character">
          <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${character ? character.character : 'question'}_01.png`} />
        </div>
        <div className="player-tag">
          <span className="match-label">{this.props.match}</span>
          <div className="tag-display">
            {player ? player.tag : "-"}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    activePlayer: state.games.activePlayer
  }
}

export default connect(mapStateToProps)(Player)
