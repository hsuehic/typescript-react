/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-8-14 10:28:47
 */

import * as React from 'react';

import './Hello.css';

export interface Props {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

const Component = ({ languageName, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiasm. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {languageName + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

export default Component;
