import { ADD_MOVIE, DELTE_MOVIES, GET_MOVIES, REMOVE_SELECTED_MOVIES, SINGLE_MOVIES_DATA, UPDATE_MOVIE } from "../Actions/action.type";

const initialState = {
  tasks: [],
  taskSingle: [],
  loading: true,
};

export const taskReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };

    case DELTE_MOVIES:
    case ADD_MOVIE:
    case UPDATE_MOVIE:

      return {
        ...state,
        loading: false,
      };

    case SINGLE_MOVIES_DATA:
      return{
        ...state,
        taskSingle:payload,
        loading:false
      };
    
    case REMOVE_SELECTED_MOVIES:
    return {
      ...state,
      taskSingle:[]
    }
        
    default:
      return state;
  }
};
