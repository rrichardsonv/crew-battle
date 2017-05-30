import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MatchDisplay extends Component {
  render () {
    const matchez = this.props.matches.map((match) => {
      if (match.east.players.length === 2) {
        return (
          <li>
            <div className="match doubles">
              <h4 className="match-title">{match.name}</h4>
              <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.east.characters[0]}_01.png`} />
              <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.east.characters[1]}_01.png`} />
              <img src={`${process.env.PUBLIC_URL}/stages/${match.stage}.png`} />
              <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.west.characters[0]}_01.png`} />
              <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.west.characters[1]}_01.png`} />
            </div>
          </li>
        )
      } else {
        return (
        <li>
          <div className="match singles">
            <h4 className="match-title">{match.name}</h4>
            <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.east.characters[0]}_01.png`} />
            <img src={`${process.env.PUBLIC_URL}/stages/${match.stage}.png`} />
            <img src={`${process.env.PUBLIC_URL}/portraits/chr_13_${match.west.characters[0]}_01.png`} />
          </div>
        </li>
        )
      }
    })
    return (
      <div className="center-display">
        <ul className="match-list">
        {matchez.map((match) => match)}
        </ul>
      </div>
    )
  }
}
const { arrayOf, shape, string } = PropTypes
MatchDisplay.propTypes = {
  matches: arrayOf(shape({
    name: string,
    east: shape({
      players: arrayOf(string),
      characters: arrayOf(string)
    }),
    west: shape({
      players: arrayOf(string),
      characters: arrayOf(string)
    }),
    stage: string
  }))
}

export default MatchDisplay
