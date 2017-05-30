import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from '../data.json'


class CharacterSelect extends Component {
  render () {
    let characterIcons = []
    data.characters.forEach((char) => {
      if (this.props.banned.includes(char.icon)) {
        characterIcons.push((
          <button
            className="character-choose"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/portraits/chr_13_${char.icon}_01.png)`,
              backgroundSize: "cover",
              backgroundColor: "grey",
              filter: "grayscale(100%)"
            }}
          />
        ))
      } else {
        characterIcons.push((
          <button
            onClick={this.props.handleCharacterClick}
            name={char.icon}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/portraits/chr_13_${char.icon}_01.png)`,
              backgroundSize: "cover",
              backgroundColor: "white"
            }}
            className="character-choose"
          />
        ))
      }
    })
    return (
      <div className="center-wrapper">
        <div className="character-wrapper">
          {characterIcons.map((icon) => icon)}
        </div>
      </div>
    )
  }
}
const { func, arrayOf, string } = PropTypes
CharacterSelect.propTypes = {
  handleCharacterClick: func,
  banned: arrayOf(string)
}


export default CharacterSelect