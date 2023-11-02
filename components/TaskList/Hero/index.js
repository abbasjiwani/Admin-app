import React, { useEffect, useState } from "react";
import Select from "react-select";
import TaskList from "./TaskList";
import Upcoming from "./Upcoming";

const index = () => {
  const options = [
    { value: "progress", label: "Progress" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];
  const [selectedOption, setSelectedOption] = useState({
    value: "progress",
    label: "Progress",
  });
  
  const [task, setTask] = useState([])

  const getTaskList = async () => {
    const data = await fetch("/api/GetTask");
    const response = await data.json();
    setTask(response.data.result)
  }
  useEffect(() => {
    getTaskList();
  }, [])

  return (
    <div className="pl-14 mt-8 w-full mb-8">
      <div className="w-11/12 flex">
        <p className="text-3xl w-4/5 font-bold">Task List</p>
        <div className="w-">
  <Select
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
    className="bg-green-200" // Use a Tailwind CSS class to set the background color
  />
</div>
      </div>
      <div className="flex mt-2">
        <p className="font-bold text-lg">{task.length},</p>
        <p className="font-base text-md mt-1 text-gray-400">&nbsp;total tasks</p>
      </div>
      <div>
        {/* <TaskList data={task} selected={selectedOption.value}/> */}
        <TaskList />
        <Upcoming data={task} />
      </div>
    </div>
  );
};

export default index;
