import React from "react";
import Navbar from "../../components/navbar/Navbar";

const CreateGroupPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center">
        <div className="lg:w-1/3 md:w-1/2 sm:w-full w-full px-4 py-8">
          <center>
            <h1 className="text-white text-3xl">Let's create a group!</h1>

            <br />
            <label className="text-xl text-white">
              Please Upload the Group Image:
            </label>
            <br />
            <input type="file" className="p-2 text-white" accept=".jpg,.png" />
            <br />
            <br />
            <label className="text-xl text-white">
              Please Enter the name of the Group:
            </label>
            <br />
            <input
              type="text"
              className="w-full lg:w-[330px] outline-none border-2 border-white rounded-sm mt-2 p-2 text-white"
            />
            <br />
            <br />

            <label className="text-xl text-white">
              Please Enter the description of the Group:
            </label>
            <br />
            <input
              type="text"
              className="w-full lg:w-[330px] outline-none border-2 border-white rounded-sm mt-2 p-2 text-white"
            />
            <br />
            <button className="mt-4 text-white px-4 py-4 text-center rounded bg-[#324773] transition-all lg:w-[180px] w-full hover:bg-[#2e4e93]">
              Create!
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default CreateGroupPage;
