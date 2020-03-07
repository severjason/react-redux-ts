import { Reducer } from 'redux';
import * as types from './types';
import {
 Pet, Service,
} from '../../../ts-types/api';
import { Actions } from './actions';

const INITIAL_STATE = {
  isLoading: false,
  pets: [] as Pet[],
  services: [] as Service[],
  error: null as Error | null,
};

export type RootState = typeof INITIAL_STATE;

const reducer: Reducer<typeof INITIAL_STATE, Actions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_SERVICES_REQUEST:
    case types.GET_PETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    }
    case types.GET_PETS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        pets: action.payload,
      }
    }
    case types.GET_SERVICES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        services: action.payload,
      }
    }
    case types.GET_PETS_FAILED:
    case types.GET_SERVICES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    }
    case types.CLEAR_PETS: {
      return {
        ...state,
        pets: [],
        isLoading: false,
        error: null,
      }
    }
    case types.CLEAR_SERVICES: {
      return {
        ...state,
        services: [],
        isLoading: false,
        error: null,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
