import * as types from './types';
import {
  Pet, Service
} from '../../../ts-types/api';

export const getPetsRequest = (page?: number) => ({
  type: types.GET_PETS_REQUEST,
  payload: page,
});

export const getPetsSuccess = (data: Pet[]) => ({
  type: types.GET_PETS_SUCCESS,
  payload: data,
});

export const getPetsFailed = (error: Error) => ({
  type: types.GET_PETS_FAILED,
  payload: error,
});

export const clearPets = () => ({
  type: types.CLEAR_PETS,
});

export const getServicesRequest = () => ({
  type: types.GET_SERVICES_REQUEST,
});

export const getServicesSuccess = (data: Service[]) => ({
  type: types.GET_SERVICES_SUCCESS,
  payload: data,
});

export const getServicesFailed = (error: Error) => ({
  type: types.GET_SERVICES_FAILED,
  payload: error,
});

export const clearServices = () => ({
  type: types.CLEAR_SERVICES,
});

export type Actions = ReturnType<typeof getPetsRequest
  | typeof getPetsSuccess
  | typeof getPetsFailed
  | typeof clearPets
  | typeof getServicesRequest
  | typeof getServicesSuccess
  | typeof getServicesFailed
  | typeof clearServices>
