

import Features from "./components/Features";
import GetinTouch from "./components/GetinTouch";
import Header from "./components/Header";
import Services from "./components/Projects";
import Solutions from "./components/Solutions";
import Transfer from "./components/Transfer";

const App = () => {
  return (
    <>
      <Header />
      <Transfer />
      <Features/>
      <Services/>
      <GetinTouch/>
      <Solutions/>
    </>
  );
};

export default App;
