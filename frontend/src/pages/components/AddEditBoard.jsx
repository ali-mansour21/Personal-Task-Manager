import { useState } from "react";
import sendAuthRequest from "../../core/tools/authRequest";
import { requestMethods } from "../../core/requests/requestMethod";

const AddEditBoard = ({ setIsBoardModalOpen, type, reloadBoards }) => {
  const [boardData, setBoardData] = useState({
    title: "",
  });
  const createNewBoard = () => {
    sendAuthRequest(requestMethods.POST, "boards", boardData).then(
      (response) => {
        if (response.status === 201) {
          reloadBoards();
        }
      }
    );
  };
  return (
    <div
      className="  fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown "
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsBoardModalOpen(false);
      }}
    >
      <div
        className="  max-h-[95vh]  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
      >
        <h3 className=" text-lg ">
          {type === "edit" ? "Edit" : "Add New"} Board
        </h3>

        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Board Name
          </label>
          <input
            className=" bg-transparent  px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder=" e.g Web Design"
            onChange={(e) => {
              setBoardData({
                ...boardData,
                title: e.target.value,
              });
            }}
            id="boardName"
          />
        </div>

        <div className="mt-8 flex flex-col space-y-3">
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                createNewBoard();
              }}
              className=" w-full items-center hover:opacity-70 dark:text-white dark:bg-[#635fc7] mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full"
            >
              {type === "add" ? "Create New Board" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditBoard;
