import Navigation from "./Navigation/Nav";
import Prodacts from "./Products/Prodacts.jsx";
import Recomended from "./Recomended/Recomended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Sidebar />
      <Navigation />
      <Recomended />
      <Prodacts />
    </>
  );
}

export default App;
