import React from "react";
import Navbar from "../../components/navbar/Navbar";

const SubmitProjectPage = () => {
  let date = new Date();
  // Formatting date, hour, minute, second, and millisecond
  let formattedDate = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;

  return (
    <>
      <Navbar />
      <div className="submitProjectPage">
        <center>
          <h2 className="text-3xl text-white font-bold">
            Submitting your project to: Group name
          </h2>
          <h4 className="text-xl text-white mt-4">
            Timestamp: {formattedDate}
          </h4>
        </center>
      </div>
    </>
  );
};

export default SubmitProjectPage;
