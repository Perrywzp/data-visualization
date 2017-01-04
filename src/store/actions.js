import * as types from '../constants/ActionTypes';

const makeAction = type => ({commit}, ...args) => commit(type, ...args);

export const updateDevice = makeAction(types.UPDATE_DEVICE);

