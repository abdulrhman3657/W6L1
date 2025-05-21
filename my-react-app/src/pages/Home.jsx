import React from "react";

function Home() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-8/10 my-5">
       <h1 className="text-3xl font-semibold lg:text-3xl"> Welcome to tuwaiq academy</h1>
          <div className="max-w-[1400px] w-full mx-auto space-y-10 lg:py-14 px-4 lg:px-0">
            <h1 className="text-3xl font-semibold lg:text-6xl">Who Are We</h1>
            <p className="text-[#7C7C7C] lg:text-[#000000] lg:text-2xl py-2">
              Tuwaiq Academy is the first educational program for advanced
              technology fields in the Kingdom of Saudi Arabia. It offers a
              number of diverse programs in various technical tracks for
              different age groups. The establishment of the academy was
              announced in August 2019.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
