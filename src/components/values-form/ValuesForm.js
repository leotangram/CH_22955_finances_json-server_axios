import React from "react";
import { useForm } from "../../hooks/useForm";
import { addData } from "../../services/services";

const ValuesForm = ({ getGoal }) => {
  const [{ amount, type }, handleInputChange, reset] = useForm({
    amount: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addData({ amount, type }, "values");
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
        placeholder="Valor"
        autoComplete="off"
        onChange={handleInputChange}
        value={amount}
      />
      <select name="type" onChange={handleInputChange} value={type}>
        <option value="">---Tipo---</option>
        <option value="income">Ingreso</option>
        <option value="expensive">Egreso</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ValuesForm;
