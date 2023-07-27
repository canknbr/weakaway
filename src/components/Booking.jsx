import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="w-full max-w-[1140px] mx-auto p-4">
      <form
        action=""
        className="lg:flex lg:justify-between gap-4 w-full items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="">Destination</label>
          <select
            name=""
            id=""
            className="md:w-full lg:w-[300px] border rounded-md p-2"
          >
            <option value="">Grande Antigua</option>
            <option value="">Grande Antigua</option>
            <option value="">Grande Antigua</option>
            <option value="">Grande Antigua</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="">Check In</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="">Check Out</label>
            <input
              type="date"
              name=""
              id=""
              className="border rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label className="" htmlFor="">
            Search
          </label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
