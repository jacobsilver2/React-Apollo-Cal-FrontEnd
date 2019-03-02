import React, { Component } from 'react'
import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import { Query } from 'react-apollo';
import * as queries from './globals/queries/queries';
// import { perPage, perPageList } from '../config';





const Pagination = (props) => (
  <Query query={queries.PAGINATION_QUERY}>
      {({data, loading, error}) => {
        if (loading) return <p>loading...</p>
        const count = data.actsConnection.aggregate.count;
        const pages = Math.ceil(count / props.perPage);
        return (
          <PaginationStyles>
            <Head>
              <title>page {props.page} of {pages}</title>
            </Head>
            <Link  prefetch href={{pathname: 'acts', query: {page: props.page - 1}}}>
              <a aria-disabled={props.page <= 1}>⬅️ Prev</a>
            </Link>
            <p>Page {props.page} of {pages}</p> 
            <p>{count} acts</p>
            <Link  prefetch href={{pathname: 'acts', query: {page: props.page + 1}}}>
              <a aria-disabled={props.page >= pages}>➡️ Next</a>
            </Link>
          </PaginationStyles>
        )
      }}
    </Query>
);

export default Pagination;