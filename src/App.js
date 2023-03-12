import "./App.css";
import Navbar from "./components/navabar/NavBar";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Navbar />
          <Main/>
          <Sidebar/>
        </div>
      </main>
    </>
  );
}

export default App;
