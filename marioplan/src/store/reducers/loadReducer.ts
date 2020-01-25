export class LoadState {
  isLoading = false;
}

export enum LoadType {
  START = "loadStart",
  END = "loadEnd",
}

export interface LoadStart {
  type: LoadType.START;
}
export interface LoadEnd {
  type: LoadType.END;
}

export type LoadAction = LoadStart | LoadEnd;

const loadReducer = (
  state: LoadState = new LoadState(),
  action: LoadAction,
): LoadState => {
  switch (action.type) {
    case LoadType.START:
      return {
        isLoading: true,
      };
    case LoadType.END:
      return {
        isLoading: false,
      };
    default:
      const _: never = action;
  }
  return state;
};

export { loadReducer };
