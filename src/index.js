import { get } from 'lodash';

export const func = (key) => get({ a: 5 }, key);
