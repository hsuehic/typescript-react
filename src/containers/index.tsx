import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions/index';
import Hello from '../components/Hello';

/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 8/21/2018, 1:19:07 PM
 */

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    languageName
  }
}

export function mapDispatchToProps(dispatch: Function) {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDerement: () => dispatch(decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
