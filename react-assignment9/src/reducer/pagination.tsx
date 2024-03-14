type Pagination = {
  page: number;
};

export const paginationInitialState = {
  page: 1,
};

export enum actionTypes {
  NEXT_PAGE = "NEXT_PAGE",
  PREV_PAGE = "PREV_PAGE",
}

type Action = {
  type: actionTypes;
};

export const paginationReducer = (state: Pagination, action: Action) => {
  switch (action.type) {
    case actionTypes.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case actionTypes.PREV_PAGE:
      return { ...state, page: Math.max(1, state.page - 1) };
    default:
      return state;
  }
};
