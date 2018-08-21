/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 8/21/2018, 11:05:05 AM
 */

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSTIASM, DECREMENT_ENTHUSTIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch(action.type) {
    case INCREMENT_ENTHUSTIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSTIASM: 
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1};
    default:
      return state;
  }
}