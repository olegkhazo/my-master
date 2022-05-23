import { createStore } from "vuex";

import mastersModule from './modules/masters/index';

const store = createStore({
    modules: {
        masters: mastersModule
    }
});

export default store;