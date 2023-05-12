import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-500">
        Hot Cold Coffee {coffees.length}
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default App;
