import Navbar from "./components/partials/Navbar";
import RouteRouter from "./routes";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[70px]">
        <RouteRouter />
      </div>
    </>
  );
}

export default App;
