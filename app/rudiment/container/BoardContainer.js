import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Board from '../component/Board'
import * as actions from '../action'




const mapStateToProps = state => {
  return {
    doing: state ? state.doing : null
  }
}

const mapDispatchToProps = dispatch => {
  let boundActionCreators = bindActionCreators(actions, dispatch)
  return {
    ...boundActionCreators,
    onHop() {
      dispatch(actions.hop())
    }
  }
} 

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)


export default BoardContainer