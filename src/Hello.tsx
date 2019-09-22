import {
  StoreState,
  incrementEnthusiasm,
  decrementEnthusiasm,
  EnthusiasmAction
} from './state';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export function mapStateToProps({ enthusiasmLevel, name }: StoreState) {
  return {
    enthusiasmLevel,
    name
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(incrementEnthusiasm()),
    onDecrement: () => dispatch(decrementEnthusiasm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
