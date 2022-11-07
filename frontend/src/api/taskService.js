import axios from "axios";

const API_URL = "http://localhost:9000/api/tasks/";
//create task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};
// get all tasks
const getTasks = async (taskId) => {
  taskId=taskId||''
  
  const response = await axios.get(API_URL +taskId);
  return response.data

};

// delete tasks
const deleteTask = async (taskId) => {
  const response = await axios.delete(API_URL + taskId);
  return response.data;
};
//update task
const updateTask = async (taskId) => {
  const response = await axios.put(API_URL + taskId);
  return response.data
}

const taskService = {
  createTask,
  getTasks,
  deleteTask,
  updateTask
};
export default taskService;
