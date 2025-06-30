// src/context/AdminContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { users as initialUsers } from '../data/users';
import { payments as initialPayments } from '../data/payments';
import { applications as initialApplications } from '../data/applications';

// Initial state
const initialState = {
  users: initialUsers,
  payments: initialPayments,
  applications: initialApplications,
  loading: false,
  error: null
};

// Action types
const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USER: 'ADD_USER',
  UPDATE_PAYMENT: 'UPDATE_PAYMENT',
  ADD_PAYMENT: 'ADD_PAYMENT',
  UPDATE_APPLICATION: 'UPDATE_APPLICATION',
  DELETE_APPLICATION: 'DELETE_APPLICATION',
  ADD_APPLICATION: 'ADD_APPLICATION'
};

// Reducer function
const adminReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes
