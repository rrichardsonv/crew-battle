import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ModalWrapper extends Component {
  constructor (props) {
    super(props)
    this._handleBackgroundClick = this._handleBackgroundClick.bind(this)
    this._onOk = this._onOk.bind(this)
  }
  _handleBackgroundClick (e) {
    if (e.target === e.currentTarget) this.props.hideModal()
  }
  _onOk () {
    this.props.onOk()
    this.props.hideModal()
  }
  render () {
    const okButton = this.props.showOk
    ? (
      <button
        onClick={this._onOk}
        disabled={this.props.okDisabled}
      >
        {this.props.okText}
      </button>
      ) : null
    return (
      <div
        className="modal"
        onClick={this._handleBackgroundClick}
      >
        <header>
          <h1>{this.props.title}</h1>

          <button onClick={this.props.hideModal}>Close</button>
        </header>

        {this.props.children}

        {okButton}
      </div>
    )
  }
}
const { string, bool, object, number, func, element, array, oneOfType } = PropTypes
ModalWrapper.propTypes = {
  // props
  title: string,
  showOk: bool,
  okText: string,
  okDisabled: bool,
  width: number,
  style: object,
  // learned something new today allows for any of types listed
  children: oneOfType([
    array, element, string,
  ]),

  // methods
  hideModal: func,
  onOk: func,
}

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
}

export default ModalWrapper