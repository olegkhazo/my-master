export default {
    masters(state) {
        return state.masters;
    },
    hasMasters(state) {
        return state.masters && state.masters.length > 0;
    }
};