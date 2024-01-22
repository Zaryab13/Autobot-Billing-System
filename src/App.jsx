import Header from "./components/Header";
import Home from "./components/Home";
import { Fragment } from "react";
import ModalToggleContextProvider from "./store/modal-toggle-context";
import Login from "./components/Login/Login";

function App() {
  return (
    <Fragment>
      <ModalToggleContextProvider>
        {/* <Login/> */}
        <Header />
        <Home />
      </ModalToggleContextProvider>
    </Fragment>
  );
}

export default App;
