import React from "react";

const Button = ({ styles, onClick }) => (
  <button onClick={onClick} type="button" className={`min-w-[200px] py-4 font-poppins font-bold text-[18px] text-primary bg-yellow-300 rounded-[10px] outline-none ${styles}`}>
    Join Waitlist
  </button>
);

export default Button;