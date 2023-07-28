import shortid from "shortid";

// action value (휴먼 에러 방지)
const ADD_TODO = "todos/addTodo";
const REMOVE_TODO = "todos/removeTodo";
const SWITCH_TODO = "todos/switchTodo";

// action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

// initialState
const initialState = [
  {
    id: shortid.generate(),
    title: "제목",
    body: "할일",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "할일2",
    isDone: true,
  },
];

// redux 함수
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SWITCH_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title, body: action.payload.body }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
