import { TIER_DEFINED } from "../redux-actions/tierAction";

const initalState = {
  tier: {},
  access: {}
};

const tierReducer = (state = initalState, action) => {
  console.log("tierReducer fired");
  switch (action.type) {
    case TIER_DEFINED:
      return {
        ...state,
        tier: action.payload.tier,
        access: action.payload.access
      };
    default:
      return state;
  }
};
export default tierReducer;
