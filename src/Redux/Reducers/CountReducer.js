const initalstate = { count: 0, value: 0 };
const CountReducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case "INC":
      return { ...state, count: state.count + payload };
    case "DEC":
      return { ...state, count: state.count - payload };

    default:
      return state;
  }
};

export default CountReducer;
