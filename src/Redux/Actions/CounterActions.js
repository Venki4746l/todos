export const INCREMENT = "INC";
export const DECREMENT = "DEC";

export const increment = (value) => ({
  type: INCREMENT,
  payload: value,
});
export const decrement = (value) => ({
  type: DECREMENT,
  payload: value,
});
