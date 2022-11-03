import axios from "axios";

const API_URL = "http://localhost:9000/api/tasks";
//create task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};
// get all tasks
const getTasks =  async () => {
  const response = await axios.get(API_URL);
  
  return (response.data);
};
console.log(getTasks);

axios.get(API_URL)
  .then(function (response) {
    console.log(response.data);
  })

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
