const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    require: [true, "please add to do List"],
  },
  status: {
    type: Boolean,
    default: false,
  },
},
    {
    timestamps:true
}
);

module.exports = mongoose.model("toDoList", todoSchema);
