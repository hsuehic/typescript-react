/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 8/21/2018, 10:45:46 AM
 */

import * as constants from '../constants'

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSTIASM
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSTIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSTIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSTIASM
  }
}
