export interface ReducerMethods<SType> {
  [actionType: string]: (state: SType, payload?: any) => SType;
}
