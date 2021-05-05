import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="py-3">{/* <HomeScreen /> */}</main>
    </div>
  );
}

export default App;
