import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, COMPLETED, UNCOMPLETED } from './actions';

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  console.log("state: ", state);
  console.log("action: ", action);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETED:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }]
      };
    case UNCOMPLETED:
      const aTarget = state.completed.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter((com) => com.id !== action.payload),
        toDos: [...state.toDos, { ...aTarget }]
      };
    default:
      return;
  }
};

export default reducer;
