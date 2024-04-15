import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddEditBoard from "./AddEditBoard";
import Sidebar from "./Sidebar";
const Home = () => {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

//   const boards = useSelector((state) => state.boards);
//   const board = boards.find((board) => board.isActive === true);
//   const columns = board.columns;

  return (
    <div className=" bg-[#f4f7fd]  scrollbar-hide h-screen flex dark:bg-[#20212c]  overflow-x-scroll gap-6  ml-[261px]">
      <Sidebar
        setIsBoardModalOpen={setIsBoardModalOpen}
        isBoardModalOpen={isBoardModalOpen}
      />
      {/* {columns.length > 0 && (
        <>
          {columns.map((col, index) => (
            <Column key={index} colIndex={index} />
          ))}
          <div
            onClick={() => {
              setIsBoardModalOpen(true);
            }}
            className=" h-screen  flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2   mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[135px] rounded-lg "
          >
            + New Column
          </div>
        </>
      )} */}
      {isBoardModalOpen && (
        <AddEditBoard type="edit" setIsBoardModalOpen={setIsBoardModalOpen} />
      )}
    </div>
  );
};

export default Home;
