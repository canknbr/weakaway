import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[60%] w-full md:-[20%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-4xl font-bold">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laudantium consequatur nesciunt repellendus, sit dolorum. Officia
            commodi recusandae dicta! Consequatur sit suscipit eaque maxime
            porro eligendi officia enim commodi veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
