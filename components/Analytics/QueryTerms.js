import React, { useState } from 'react';
import QueryResuls from './QueryResults';

const QueryTerms = () => {
  const [orderBy, setOrderBy] = useState('draw_DESC');
  const [first, setFirst] = useState(3);

  return (
    <>
      <QueryResuls orderBy={orderBy} first={first} />
    </>
  );
}

export default QueryTerms;

