import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/2 bg-[#1f1E24] text-zinc-200 flex flex-col p-[10%] md:p-[5%]">
        <h1 className="text-5xl font-bold uppercase">Contact</h1>
        <p className="text-base md:w-1/3 mt-3">
          If you've got any questions, please fill out the short form below to
          drop us an email and we promise to get back to you in lighting speed.
        </p>
        <div className="mt-5 flex gap-10">
          <Link to="/" className="text-lg border-b hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-lg border-b hover:text-white">
            About
          </Link>
        </div>
      </div>
      <div className="w-full h-1/2 px-3 bg-zinc-100 text-zinc-700 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold uppercase">Who We Are ?</h1>
        <p className="md:w-1/2 text-zinc-500 md:text-base text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus id sequi mollitia eos rerum quibusdam aperiam officia a aspernatur iste, ipsa commodi nostrum sunt repellendus, excepturi quisquam. Perferendis, veniam culpa?</p>
      </div>
    </div>
  );
};

export default Contact;
