import React from "react";
import { useForm } from "../../hooks/useForm";
import { addData } from "../../services/services";

const GoalForm = ({ getGoal }) => {
  const [{ amount }, handleInputChange, reset] = useForm({
    amount: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addData({ amount }, "goal");
    setTimeout(() => {
      getGoal();
    }, 300);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Ingresa tu meta"
        autoComplete="off"
        onChange={handleInputChange}
        value={amount}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default GoalForm;
