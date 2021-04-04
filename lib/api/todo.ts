import axios from ".";
import { TodoType } from "../../types/todo";

//** TodoList 불러오는 API */
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");