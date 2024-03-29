import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useModalToggleContext } from "../../store/modal-toggle-context";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/75"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] bg-white p-4 rounded-2xl shadow-md z-30 animate-[slide-down_0.3s_ease-out_forward] lg:w-[50rem] lg:left-[50%] lg:-translate-x-1/2 overflow-y-scroll max-h-[60vh]">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const {closeModal} = useModalToggleContext();

  const ModalCloseHandler = () => {
    closeModal();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Backdrop onClose={ModalCloseHandler} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
