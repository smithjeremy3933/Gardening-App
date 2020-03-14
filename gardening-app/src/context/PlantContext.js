import createDataContext from "./createDataContext";
import gardeningApi from "../api/gardening";
import { navigate } from "../navigationRef";

const plantReducer = (state, action) => {
  switch (action.type) {
    case "fetch_plants":
      return action.payload;
    default:
      return state;
  }
};

const fetchPlants = dispatch => async () => {
  const response = await gardeningApi.get("/plants");
  dispatch({ type: "fetch_plants", payload: response.data });
};

const createPlant = dispatch => async (plantName, plantStatus) => {
  try {
    await gardeningApi.post("/plants", plantName, plantStatus);
  } catch (err) {
    console.log(err.message);
  }
};

export const { Provider, Context } = createDataContext(
  plantReducer,
  { createPlant, fetchPlants },
  []
);
