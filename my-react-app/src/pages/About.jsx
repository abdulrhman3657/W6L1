import React from "react";

function About() {
  return <div  className="flex justify-center py-5">
    <div className="w-8/10">
    <h1 className="bg-blue-600 text-white p-3 rounded">What do we offer?</h1>
    <ul className="flex gap-3 my-3">
      <li className="bg-black text-white p-3 rounded">Bootcamps</li>
      <li className="bg-black text-white p-3 rounded">Training programs</li>
      <li className="bg-black text-white p-3 rounded">E-Learning</li>
      <li className="bg-black text-white p-3 rounded">Global competitions</li>
      <li className="bg-black text-white p-3 rounded">Digital communities</li>
      <li className="bg-black text-white p-3 rounded">Knowledge sessions</li>
    </ul>
  </div>;
  </div>
}

export default About;
