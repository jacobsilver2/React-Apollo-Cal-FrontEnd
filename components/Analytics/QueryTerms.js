import React, { useState } from 'react';
import QueryResuls from './QueryResults';

const ORDER_BY_TERMS = [
  "status_ASC",
  "status_DESC",
  "start_ASC",
  "start_DESC",
  "draw_ASC",
  "draw_DESC",
];

const QueryTerms = () => {
  const [orderBy, setOrderBy] = useState('draw_DESC');
  const [first, setFirst] = useState(3);


  function handleOrderByChange (e) {
    const {value} = e.target;
    setOrderBy(value);
  }

  function handleChangeFirst (e) {
    const {value} = e.target;
    setFirst(parseInt(value));
  }

  const orderBySelections = ORDER_BY_TERMS.map(term => (
    <option key={term} value={term}>{term}</option>
  ));

  return (
    <>
      <label htmlFor="orderBy">
        Order By
        <select name="orderBy" defaultValue="draw_DESC" onChange={handleOrderByChange}>
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

