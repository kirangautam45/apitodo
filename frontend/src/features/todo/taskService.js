
import axios from 'axios';

const API_URL = "http://localhost:9000/api/tasks/";
//create task
const createTask = async (taskData) => {
    const response = await axios.post(API_URL, taskData)
    return response.data;
}






const taskService = {
    createTask,

}
export default taskService