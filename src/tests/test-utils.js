import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import homeReducer from '../redux/homeActions';
import detailsReducer from '../redux/detailsActions';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { home: homeReducer, details: detailsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export default render;
