import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bans extends Component {
  render () {
    const bans = ['question', 'question'].concat(this.props.teams[this.props.side].characterBans).slice(-2)
    let stageBan = this.props.teams[this.props.side].stageBan || 'question'
    return (
      <div className="bans-wrapper">
        <ul className="bans-list">
          {bans.map((ban) =>{
            return (
              <li>
                <div
                  className={`ban ${this.props.side}`}
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/portraits/chr_13_${ban}_01.png)`,
                    backgroundSize: "cover",
                    backgroundColor: "white"
                  }}
                />
              </li>
            )
          })}
          <li>
            <div
              className={`ban ${this.props.side}`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/stages/${stageBan}.png)`,
                backgroundSize: "cover",
                backgroundColor: "white"
              }}
            />
          </li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps)(Bans)
