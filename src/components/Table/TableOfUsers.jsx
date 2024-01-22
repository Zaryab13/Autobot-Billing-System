import React, { useState } from "react";
import TableHeader from "../UI/TableHeader";
import TableRows from "../UI/TableRows";
import Modal from "../UI/Modal";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { useModalToggleContext } from "../../store/modal-toggle-context";
import DisabledInput from "../UI/DisabledInput";
import Input from "../UI/Input";
const headings = [
  "S.No",
  "City",
  "Branch",
  "Internet",
  "Vendor",
  "Vendor Contact",
  "Issue Date",
  "Due Date",
  "Actions",
];

const rows = [
  {
    serial: 1,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
  {
    serial: 2,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
  {
    serial: 3,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
  {
    serial: 4,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
  {
    serial: 5,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
  {
    serial: 6,
    city: "New York",
    branch: "Down Town",
    internet: "High Speed",
    vendor: "Tech Solutions Inc",
    vendorContact: "Vendor",
    issueDate: "2024-01-21",
    dueDate: "2024-02-21",
  },
];

function JsonToArray(jsonObject) {
  if (!jsonObject) {
    return [];
  }

  const values = Object.values(jsonObject);
  const keys = Object.keys(jsonObject);

  const result = [];

  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], values[i]]);
  }

  return result;
}

const TableOfUsers = () => {
  const { isOpen, closeModal, modalType, modalData } = useModalToggleContext();

  const [isPaying, setIsPaying] = useState({
    timesClicked: 0,
    paying: false,
  });

  const closeModalHandler = () => {
    setIsPaying((prevState) => ({
      timesClicked: 0,
      paying: false,
    }));
    closeModal();
  };

  const viewModalPaymentHandler = () => {
    console.log("Clicked Payment Button");

    setIsPaying((prevState) => {
      const timesClicked = prevState.timesClicked + 1;

      if (timesClicked === 1) {
        // Display the payment form on the first click
        return {
          ...prevState,
          timesClicked,
          paying: true,
        };
      } else {
        // Process payment or any other function on the second click
        // Add your payment processing logic here

        // Close the modal after processing payment
        closeModal();

        // Reset the state for future interactions
        return {
          timesClicked: 0,
          paying: false,
        };
      }
    });
  };

  const paymentForm = (
    <div className="mt-8 flex flex-col gap-y-4">
      <h3 className="text-[1.5rem] font-medium text-black/70">Payment Information</h3>
      <form className="grid grid-cols-3 gap-8">
        <Input label="Invoice Number" />
        <Input label="Amount Paid" />
      </form>
    </div>
  );

  const modalDataArray = JsonToArray(modalData);
  console.log(modalDataArray);

  const viewModal = isOpen && modalType === "VIEW" && (
    <Modal>
      <div className="px-4">
        <div className="w-full text-center border-b-2 pb-4 mb-6">
          <h3 className="font-semibold text-3xl">User Information</h3>
        </div>
        <main className="py-4">
          <form action="" className="grid grid-cols-3 gap-8">
            {modalDataArray.map(([key, value], index) => (
              <DisabledInput key={index} label={key} value={value} />
            ))}
          </form>

          {isPaying.paying && isPaying.timesClicked === 1 && paymentForm}
        </main>

        <div className="flex border-t-2 pt-4 justify-end gap-4">
          <button
            className="py-2 px-4 border font-medium border-slate-500 text-slateborder-slate-500 hover:bg-slate-500 hover:text-white/90 transition-all rounded-xl"
            onClick={closeModalHandler}
          >
            Close
          </button>
          <button
            className="py-2 px-4 border font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white/90 transition-all rounded-xl flex items-center gap-4"
            onClick={viewModalPaymentHandler}
          >
            Pay<BsFillCreditCard2FrontFill />
          </button>
        </div>
      </div>
    </Modal>
  );

  const updateModal = isOpen && modalType === "UPDATE" && (
    <Modal>
      <div className="px-4">
        <div className="w-full text-center border-b-2 pb-4 mb-6">
          <h3 className="font-semibold text-3xl">User Information</h3>
        </div>
        <main className="py-4">
          <form action="" className="grid grid-cols-3 gap-8 pb-4">
            {modalDataArray.map(([key, value], index) => (
              <Input key={index} label={key} value={value} />
            ))}
          </form>
        </main>

        <div className="flex border-t-2 pt-4 justify-end gap-4">
          <button
            className="py-2 px-4 border  font-medium border-slate-500 text-slateborder-slate-500 hover:bg-slate-500 hover:text-white/90 transition-all rounded-xl"
            onClick={closeModalHandler}
          >
            Close
          </button>
          <button className="py-2 px-4 font-medium border border-green-400 text-green-400 hover:bg-green-400 hover:text-white/90 transition-all rounded-xl">
            Update
          </button>
        </div>
      </div>
    </Modal>
  );

  const deleteModal = isOpen && modalType === "DELETE" && (
    <Modal>
      <div className="px-4">
        <div className="w-full text-center border-b-2 pb-4">
          <h3 className="font-semibold text-3xl text-red-600">Delete User ?</h3>
        </div>
        <main className="text-center py-6">
          <p className="text-black/80 font-medium text-lg">
            Are you sure you want to delete this user?
          </p>
        </main>

        <div className="flex border-t-2 pt-4 justify-end gap-4">
          <button
            className="py-2 px-4 border  font-medium border-slate-500 text-slateborder-slate-500 hover:bg-slate-500 hover:text-white/90 transition-all rounded-xl"
            onClick={closeModalHandler}
          >
            Cancel
          </button>
          <button className="py-2 px-4 border font-medium border-red-600 text-red-600 hover:bg-red-600 hover:text-white/90 transition-all rounded-xl">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
  return (
    <div className="shadow-lg rounded-lg">
      <table className="text-center">
        <TableHeader headings={headings} />
        <TableRows rows={rows} />

        {viewModal}
        {updateModal}
        {deleteModal}
      </table>
    </div>
  );
};

export default TableOfUsers;
