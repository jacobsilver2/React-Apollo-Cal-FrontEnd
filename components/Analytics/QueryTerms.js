import React, { useState } from 'react';
import QueryResuls from './QueryResults';

const ORDER_BY_TERMS = {
  status_ASC: "Status, Low to High",
  status_DESC: "Status, High to Low",
  start_ASC: "Date, Low to High",
  start_DESC: "Date, High to Low",
  draw_ASC: "Draw, Low to High",
  draw_DESC: "Draw, High to Low"
}

const DATE_RANGE_OPTIONS = {
  start_not: "is not",
  start_lt: "is before",
  start_gt: "is after",
  start_in: "is exactly",
  between: "is between",
}

const MODEL_OPTIONS = [
  "events",
  "acts",
];

const QueryTerms = () => {
  const [model, setModel] = useState('events');
  const [where, setWhere] = useState('draw');
  const [dateRange, setDateRange] = useState('start_lt');
  const [dateChoiceOne, setDateChoiceOne] = useState(new Date());
  const [dateChoiceTwo, setDateChoiceTwo] = useState(new Date());
  const [orderBy, setOrderBy] = useState('draw_DESC');
  const [first, setFirst] = useState(3);

  function handleChangeModel(e){
    const {value} = e.target;
    setModel(value);
  }

  function handleChangeDateRange(e){
    const {value} = e.target;
    setDateRange(value);
  }

  function handleOrderByChange(e){
    const {value} = e.target;
    setOrderBy(value);
  }

  function handleChangeFirst(e){
    const {value} = e.target;
    setFirst(parseInt(value));
  }

  function handleChangeDateChoiceOne(e){
    const {value} = e.target;
    setDateChoiceOne(value);
  }

  function handleChangeDateChoiceTwo(e){
    const {value} = e.target;
    setDateChoiceTwo(value);
  }

  const modelSelections = MODEL_OPTIONS.map(model => (
    <option key={model} value={model}>{model}</option>
  ));

  let orderBySelections = [];
  for (let [key, value] of Object.entries(ORDER_BY_TERMS)) {
    orderBySelections.push(<option key={key} value={key}>{value}</option>) ;
  }

  let dateRangeSelections = [];
  for (let [key, value] of Object.entries(DATE_RANGE_OPTIONS)) {
    dateRangeSelections.push(<option key={key} value={key}>{value}</option>)
  }

  return (
    <>
      <label htmlFor="model">
        Find All 
        <select name="model" defaultValue={model} onChange={handleChangeModel}>
          {modelSelections}
        </select>
      </label>

      <label htmlFor="range">
        Whose Date
        <select name="dateRange" defaultValue={dateRange} onChange={handleChangeDateRange}>
          {dateRangeSelections}
        </select>
      </label>

      <label htmlFor="dateOne">
        <input type="date" name="dateChoiceOne" onChange={handleChangeDateChoiceOne} defaultValue={dateChoiceOne.toString()}/>
      </label>

      { dateRange === "between" ?
        <label htmlFor="dateTwo">
          And
          <input type="date" name="dateChoiceTwo" onChange={handleChangeDateChoiceTwo} defaultValue={dateChoiceTwo.toString()}/>
        </label> :
        null }

      <label htmlFor="where">
        Where The Draw 
      </label>

      <label htmlFor="orderBy">
        Order By
        <select name="orderBy" defaultValue={orderBy} onChange={handleOrderByChange}>
          {orderBySelections}
        </select>
      </label>
      <label>
        # Of Results
        <input type="number" id="first" name="first" placeholder="10" defaultValue={first.toString()} onChange={handleChangeFirst} />
      </label>

      <QueryResuls orderBy={orderBy} first={first} />
    </>
  );
}

export default QueryTerms;

