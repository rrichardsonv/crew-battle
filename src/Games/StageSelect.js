import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import data from '../data.json'

class StageSelect extends Component {
  render () {
    console.log(data)
    let chosenStages = this.props.stages.map((stage) => {
      let match
      var newStage = {}
      stage.match.startsWith('s') ? match = 'Singles' : match = 'Doubles'
      Object.assign(newStage, stage, {match: match})
        return newStage
    })
    console.log(this.props.stages)
    let stageIcons = []
    data.stages.forEach((stage) => {
      if (this.props.banned.includes(stage.icon)) {
        stageIcons.push((
          <button
            className="stage-choose"
            name={stage.icon}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/stages/${stage.icon}.png)`,
              backgroundSize: "cover",
              backgroundColor: "grey",
              filter: "grayscale(100%)"
            }}
          />
        ))
      } else {
        stageIcons.push((
          <button
            onClick={this.props.handleStageClick}
            name={stage.icon}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/stages/${stage.icon}.png)`,
              backgroundSize: "cover",
              backgroundColor: "white"
            }}
            className="stage-choose"
          />
        ))
      }
    })
    return (
      <div className="center-wrapper">
        <div className="stage-select">
          {stageIcons.map((icon) => icon)}
        </div>
        <div className="matchups">
          <ul className="matchup-list">
          {chosenStages.map((stage) => {
            return (
              <li className="matchup-item">{`${stage.match}`} <div className="matchup-box" /></li>
            )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

const { func, arrayOf, string } = PropTypes
StageSelect.propTypes = {
  handleStageClick: func,
  banned: arrayOf(string),
  stages: arrayOf(string)
}
const mapStateToProps = (state) => {
  return {
    stages: state.teams.stages
  }
}


export default connect(mapStateToProps)(StageSelect)
