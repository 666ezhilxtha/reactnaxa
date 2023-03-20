import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from './servicesSlice';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Services</h1>
      {services.data.map((service) => (
        <div key={service.id}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );

 defaultServices;


export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    status: 'idle',
    data: [],
    error: null,
  },
  reducers: {
    servicesRequested: (state) => {
      state.status = 'loading';
    },
    servicesReceived: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    servicesRequestFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { servicesRequested, servicesReceived, servicesRequestFailed } = servicesSlice.actions;

export function* fetchServices() {
  try {
    yield put(servicesRequested());
    const response = yield call(axios.get, 'https://admin.naxa.com.np/api/services');
    yield put(servicesReceived(response.data));
  } catch (error) {
    yield put(servicesRequestFailed(error.message));
  }
}

export function* watchFetchServices() {
  yield takeLatest(fetchServices.type, fetchServices);
}

export default servicesSlice.reducer;


import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop);
  };

  return (
<nav>
      <ul/>
        <li/>
          <Link to="services" smooth={true} duration={500}/>
          

const App()= {
return
 (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


