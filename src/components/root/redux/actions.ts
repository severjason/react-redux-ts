import * as types from './types';
import {
  Pet, Service
} from '../../../ts-types/api';

export interface BaseAction {
  type: string;
  payload?: any;
}

export interface PetsRequestAction {
  type: string;
  payload?: number;
}

export interface PetsAction {
  type: string;
  payload: Pet[];
}

export interface ErrorAction {
  type: string;
  payload: Error;
}

export interface ServicesAction {
  type: string;
  payload: Service[];
}

export type Actions = BaseAction | PetsAction | ErrorAction | ServicesAction | PetsRequestAction;

export const getPetsRequest = (page?: number): PetsRequestAction => ({
  type: types.GET_PETS_REQUEST,
  payload: page,
});

export const getPetsSuccess = (data: Pet[]): PetsAction => ({
  type: types.GET_PETS_SUCCESS,
  payload: data,
});

export const getPetsFailed = (error: Error): ErrorAction => ({
  type: types.GET_PETS_FAILED,
  payload: error,
});

export const clearPets = (): BaseAction => ({
  type: types.CLEAR_PETS,
});

export const getServicesRequest = (): BaseAction => ({
  type: types.GET_SERVICES_REQUEST,
});

export const getServicesSuccess = (data: Service[]): ServicesAction => ({
  type: types.GET_SERVICES_SUCCESS,
  payload: data,
});

export const getServicesFailed = (error: Error): ErrorAction => ({
  type: types.GET_SERVICES_FAILED,
  payload: error,
});

export const clearServices = (): BaseAction => ({
  type: types.CLEAR_SERVICES,
});
