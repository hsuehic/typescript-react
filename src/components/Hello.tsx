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
  name: string;
  enthusiasmLevel?: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

const Component = ({ name, enthusiasmLevel = 1 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiasm. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

export default Component;
