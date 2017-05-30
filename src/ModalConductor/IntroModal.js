import React, { Component } from 'react'
import ModalWrapper from './ModalWrapper'
import PropTypes from 'prop-types'

const body = (
  <div className='inner-modal'>
    <h3>Welcome to the Crew Battles Beta!</h3>
    <p>This web tool will walk you through entering your crew, banning characters. picking characters, striking stages, and picking stages.</p>
    <p>If you've ever played Tennis before or read Prince of Tennis you'll be familiar with the format.</p>
    <p>Each team chooses 2 people to play Singles matches and 4 people to play Doubles matches.</p>
    <p>The Doubles 2 players from each team each ban a character that cannot be chosen by either team for ANY match.</p>
    <p>Then the teams alternate back and forth chosing characters to play in their matches. Chosing a character that the other team has chosen is fine; however, only one of a given character per team!</p>
    <p>After all players have chosen characters the Singles 2 players from each team will strike a stage that cannot be chosen by either team for ANY match.</p>
    <p>Finally the players that chose second for each match chose the stage that the match will be played on (no need to remember we got you).</p>
    <p>Lets get in the fight!</p>
  </div>
)
class IntroModal extends Component {
  render () {
    return (
      <ModalWrapper
        title='Welcome!'
        children={body}
        hideModal={this.props.hideModal}
        showOk={false}
      />
    )
  }
}
const { func } = PropTypes
IntroModal.propTypes = {
  hideModal: func
}

export default IntroModal
