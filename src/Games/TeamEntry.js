import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TeamEntry extends Component {
  render () {
    return (
      <div className='entry-page'>
        <section className="centered-card">
          <form
            onSubmit={this.props.handleEntry}
          >
            <input className="entry-field" type="text" name={this.props.position}/>
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
  position: string
}

export default TeamEntry