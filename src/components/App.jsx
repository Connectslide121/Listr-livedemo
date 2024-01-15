import Header from "./Header";
import InputForm from "./InputForm";
import JobList from "./JobList";
import "../styles.css";
import { useEffect, useState } from "react";

function App() {
  const [rerenderKey, setRerenderKey] = useState(0);

  const refreshList = () => {
    setRerenderKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="container">
        <div className="left-pane">
          <Header />
          <InputForm refreshList={refreshList} />
        </div>
        <div className="right-pane">
          <JobList rerenderKey={rerenderKey} />
        </div>
      </div>
    </>
  );
}

export default App;
