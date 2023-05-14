const initialState = {
  data: [],
  employees: [],
};

const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHEET_DATA':
      return { ...state, data: action.payload.data, employees: action.payload.employees };
    default:
      return state;
  }
};

export default sheetReducer;

  