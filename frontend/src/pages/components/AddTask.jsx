import React, { useState } from "react";
import sendAuthRequest from "../../core/tools/authRequest";
import { requestMethods } from "../../core/requests/requestMethod";
import { useSelector } from "react-redux";

const AddTask = ({ type, setIsAddTaskModalOpen }) => {
  const boards = useSelector((state) => state.boards);
  const board = boards?.find((board) => board.isActive === true);
  const getOpenColumnId = () => {
    if (!board) return null;
    const openColumn = board?.columns.find((column) => column.title === "OPEN");
    return openColumn ? openColumn._id : null;
  };

  const openColumnId = getOpenColumnId();
  console.log(board);
  const [taskData, setTaskData] = useState({
    title: "",
    column_id: openColumnId,
    description: "",
  });
  const handleCreateTask = () => {
    sendAuthRequest(requestMethods.POST, `/tasks/${board?.id}`, taskData).then(
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <div
      className="  py-6 px-6 pb-40  fixed   left-0 flex  right-0 bottom-0 top-0 dropdown "
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsAddTaskModalOpen(false);
      }}
    >
      <div
        className="  max-h-[95vh]  my-auto  bg-white  text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
      >
        <h3 className=" text-lg ">
          {type === "edit" ? "Edit" : "Add New"} Task
        </h3>

        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Task Name
          </label>
          <input
            id="taskTitle"
            onChange={(e) => {
              setTaskData({ ...taskData, title: e.target.value });
            }}
            type="text"
            className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder="Take coffee break"
          />
        </div>

        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Description
          </label>
          <textarea
            id="taskDescription"
            onChange={(e) => {
              setTaskData({ ...taskData, description: e.target.value });
            }}
            className=" bg-transparent outline-none min-h-[200px] focus:border-0 px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px] "
            placeholder="It's always good to take a break."
          />
        </div>

        <div className="mt-8 flex flex-col space-y-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCreateTask();
            }}
            className=" w-full items-center hover:opacity-70 dark:text-white dark:bg-[#635fc7] mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
