import produce from "immer";

export const initialState = {};

const reducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      default:
        break;
    }
    // produce(state, (draft) => {
    //   switch (action.type) {
    //     default:
    //       break;
    //   }
  });

export default reducer;
