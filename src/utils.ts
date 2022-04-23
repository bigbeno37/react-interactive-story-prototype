import {Milliseconds} from './types/UtilityTypes';

export const pause = (duration: Milliseconds) => new Promise(resolve => setTimeout(resolve, duration));