import React from "react";
import Navbar from "../../components/navbar/Navbar";

const GroupsPage = () => {
  // Dummy group data
  const dummyGroups = [
    { name: "Group 1", image: "https://dummyimage.com/150x150" },
    { name: "Group 2", image: "https://dummyimage.com/150x150" },
    { name: "Group 3", image: "https://dummyimage.com/150x150" },
    { name: "Group 4", image: "https://dummyimage.com/150x150" },
  ];

  return (
    <>
      <Navbar />
      <div className="flex justify-start items-center flex-wrap">
        {/* Create Group tile */}
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 py-8">
          <div className="createGroupDiv flex flex-col justify-center items-center bg-[#324773] h-48 w-48 rounded-lg hover:scale-105 hover:cursor-pointer transition-all">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/768px-OneDrive_Folder_Icon.svg.png"
              alt="Folder Icon"
              className="h-20 w-20"
              style={{ background: "none" }}
            />
            <h2
              className="text-5xl text-white font-bold"
              style={{ background: "none" }}
            >
              +
            </h2>
            <h2
              className="text-xl text-white font-light"
              style={{ background: "none" }}
            >
              Create Group!
            </h2>
          </div>
        </div>
        {/* Dummy group tiles */}
        {dummyGroups.map((group, index) => (
          <div
            key={index}
            className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4 py-8"
          >
            <div className="groupDiv flex flex-col justify-center items-center bg-[#324773] h-48 w-48 rounded-lg hover:scale-105 hover:cursor-pointer transition-all">
              <img
                src={group.image}
                alt={`Group ${index + 1}`}
                className="h-20 w-20"
                style={{ background: "none" }}
              />
              <h2
                className="text-xl text-white font-light mt-4"
                style={{ background: "none" }}
              >
                {group.name}
              </h2>

              <button className="mt-1 w-[120px] p-2 bg-[#1b2740] text-white rounded-sm hover:bg-[#131b2c] transition-all">
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupsPage;
