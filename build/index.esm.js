import './index-9a18132a.js';
import { A as ActiveRouter } from './active-router-0efb20ac.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
