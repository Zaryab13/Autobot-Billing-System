import React from "react";
import useInput from "../../hooks/use-input";

const Input = ({ label, value }) => {
  const {
    enteredValue ,
    isValid ,//to Check the Validity and if has any error
    isError,
    valueChangeHandler ,
    inputBlurHandler ,
    reset,
   } = useInput(value,(value)=> {
    return value
  });

  const inputType = typeof value == 'number'? 'number': 'text' ;

  return (
    <div className="flex flex-col gap-3 box-border">
      <label className="font-semibold text-slate-900 capitalize">{label}</label>
      <input
        type={inputType}
        value={enteredValue}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        className="bg-slate-200 text-black/80 rounded-md py-1 px-4 outline-none shadow-sm font-normal border border-slate-300 text-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500k"
      />
    </div>
  );
};

export default Input;
