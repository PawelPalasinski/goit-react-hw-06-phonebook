import * as actionTypes from './types';
import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
