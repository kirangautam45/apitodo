import axios from "axios";
import { renderMatches } from "react-router-dom";

const API_URL = "http://localhost:9000/api/tasks/";
//create task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};
// get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
// delete tasks
const deleteTask = async (taskId) => {
  const response = await axios.delete(API_URL + taskId);
  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};
export default taskService;
