import React, { createContext, useContext, useState } from "react";

export const ModalToggleContext = createContext(null);

const ModalToggleContextProvider = ({ children }) => {
  const [modalData, setModalData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type, userData = {}) => {
    setIsOpen(true);
    setModalData(userData);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null); // Reset modal data when the modal is closed
  };
  return (
    <ModalToggleContext.Provider
      value={{
        isOpen,
        modalData,
        modalType,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalToggleContext.Provider>
  );
};

export default ModalToggleContextProvider;

export const useModalToggleContext = () => {
  const ctx = useContext(ModalToggleContext);

  if (ctx === null) {
    throw new Error(
      "use Active Context must be within the his respective provider"
    );
  }

  return ctx;
};
