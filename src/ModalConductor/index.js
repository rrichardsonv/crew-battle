import React, { Component } from 'react'
import IntroModal from './IntroModal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setActiveModal } from '../Games/actionCreators'

class ModalConductor extends Component {
  constructor (props) {
    super(props)
    this._hideModal = this._hideModal.bind(this)
  }
  _hideModal () {
    this.props.dispatch(setActiveModal(null))
  }
  render () {
    let modal
    switch (this.props.currentModal) {
      case 'intro':
        modal = (
          <IntroModal hideModal={this._hideModal} />
          )
        break
      default:
        modal = null
    }
    return modal
  }
}
const { func, string } = PropTypes

ModalConductor.propTypes = {
  dispatch: func,
  currentModal: string
}

const mapStateToProps = (state) => {
  return {
    currentModal: state.games.currentModal
  }
}

export default connect(mapStateToProps)(ModalConductor)
