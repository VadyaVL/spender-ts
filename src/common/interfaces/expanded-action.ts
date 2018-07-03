import { Action } from 'redux';

export interface ExpandedAction<PType> extends Action {
  payload: PType;
}
