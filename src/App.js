import { useEffect, useState } from "react";
import "./App.css";
import GoalForm from "./components/goal-form/GoalForm";
import ValuesForm from "./components/values-form/ValuesForm";
import { GOAL, VALUES } from "./constants/constntants";
import { getData } from "./services/services";

function App() {
  const [goal, setGoal] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    getGoal();
    getValues();
  }, []);

  const getGoal = async () => {
    const { amount } = await getData(GOAL);
    setGoal(Number(amount));
  };

  const getValues = async () => {
    const response = await getData(VALUES);
    setValues(response);
  };

  return (
    <div className="App">
      <h1>Barra de progreso</h1>
      <h3>Meta a alcanzar: {goal}</h3>
      <GoalForm getGoal={getGoal} />
      <ValuesForm getGoal={getGoal} />
      <ul>
        {values.map(({ id, type, amount }) => (
          <li key={id}>
            <strong>{type}</strong> - {amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
