import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] mx-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXlrb25vc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form action="">
          <div className="grid grid-cols-2">
            <input type="text" placeholder="first" className="border m-2 p-2" />
            <input type="text" placeholder="last" className="border m-2 p-2" />
            <input
              type="email"
              placeholder="emails"
              className="border m-2 p-2"
            />
            <input
              type="phone"
              placeholder="phone"
              className="border m-2 p-2"
            />
            <input
              type="text"
              placeholder="address"
              className="border col-span-2 p-2 m-2 "
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="col-span-2 border m-2 p-2"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
