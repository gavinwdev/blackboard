import { Messenger } from './message';
export * from './utils';
export * from './ele-utils';

function isMessenger(obj) {
    return obj instanceof Messenger;
}

export { isMessenger};