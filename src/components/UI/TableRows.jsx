import React from "react";
import { useModalToggleContext } from "../../store/modal-toggle-context";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line, RiDeleteBin6Fill } from "react-icons/ri";

const TableRows = ({ rows }) => {
  const { openModal } = useModalToggleContext();
  const viewModalHandler = (userdata) => {
    openModal("VIEW", userdata);
  };

  const updateModalHandler = (userdata) => {
    openModal("UPDATE", userdata);
  };

  const deleteModalHandler = () => {
    openModal("DELETE");
  };

  return (
    <tbody className="bg-slate-300">
      {rows.map((item, index) => (
        <tr
          key={index}
          className="text-center border-b-2 border-e-2 last:border-none hover:bg-slate-400/20 transition-all"
        >
          <td className="text-center">{item.serial}</td>
          <td className="text-center w-[8rem] py-3">{item.city}</td>
          <td className="text-center w-[8rem] py-3">{item.branch}</td>
          <td className="text-center w-[8rem] py-3">{item.internet}</td>
          <td className="text-center w-[8rem] py-3">{item.vendor}</td>
          <td className="text-center w-[8rem] py-3">{item.vendorContact}</td>
          <td className="text-center w-[8rem] py-3">{item.issueDate}</td>
          <td className="text-center w-[8rem] py-3">{item.dueDate}</td>
          <td>
            <div className="flex gap-2 items-center px-2">
              <button
                className="w-8 h-8 rounded-full hover:bg-green-400 font-normal transition-all bg-slate-800 text-white flex items-center justify-center "
                onClick={() => {
                  viewModalHandler(item);
                }}
              >
                <FaEye />
              </button>
              <button
                className="w-8 h-8 rounded-full hover:bg-blue-500 font-extraboldbold transition-all bg-slate-800 text-white flex items-center justify-center "
                onClick={() => {
                  updateModalHandler(item);
                }}
              >
                <AiFillEdit />
              </button>
              <button
                className="group w-8 h-8 rounded-full hover:bg-red-700 font-extraboldbold transition-all bg-slate-800 text-white flex items-center justify-center "
                onClick={() => {
                  deleteModalHandler();
                }}
              >
                <RiDeleteBin6Line className="group-hover:hidden" />
                <RiDeleteBin6Fill className="hidden group-hover:block"/>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
