import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { useDddSlice } from './slice';
import { PageWrapper } from 'app/components/PageWrapper';


export function HomePage() {
  const { actions } = useDddSlice();
  const dispatch = useDispatch();

  const textInputChanged = async evt => {
    dispatch(actions.getItems());
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <button type="button" onClick={textInputChanged}>asdasdasd</button>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}
