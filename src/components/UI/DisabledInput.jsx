import React from "react";

const DisabledInput = ({label,value}) => {

  
  return (
    <div className="flex flex-col gap-3">
      <label className="font-semibold capitalize">{label}</label>
      <input
        type="text"
        disabled
        value={value}
        className="bg-slate-200 text-black/80 rounded-md py-1 px-4 outline-none shadow-sm"
      />
    </div>
  );
};

export default DisabledInput;
