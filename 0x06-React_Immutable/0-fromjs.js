import immutable from 'immutable';

const { fromJS } = immutable;

export const getImmutableObject = (object) => fromJS(object);
