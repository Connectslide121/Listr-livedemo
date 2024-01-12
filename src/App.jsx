import Header from "./components/Header";
import InputForm from "./components/InputForm";
import JobList from "./components/JobList";
import "./styles.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="left-pane">
          <Header />
          <InputForm />
        </div>
        <div className="right-pane">
          <JobList />
        </div>
      </div>
    </>
  );
}

export default App;
