import React, { Component } from 'react'
import PropTypes from 'prop-types'
import data from '../data.json'

class TeamEntry extends Component {
  render () {
    return (
      <div className='entry-page'>
        <section className="centered-card">
          <form
            onSubmit={this.props.handleEntry}
          >
            {data.positions.map((role) => {
              return (
                <input
                  className="entry-field"
                  type="text"
                  name={`${this.props.side}${role}`}
                  placeholder={role}
                />
              )
            })}
            <input className="submit-btn" type="submit" value="Lock In"/>
          </form>
        </section>
      </div>
    )
  }
}

const { func, string } = PropTypes

TeamEntry.propTypes = {
  handleEntry: func,
  side: string
}

export default TeamEntry