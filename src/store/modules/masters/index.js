import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            masters: [
                {
                    id: 'c1',
                    firstName: 'Олег',
                    lastName: 'Журавко',
                    areas: ['покраска', 'полировка', 'рихтовка'],
                    description: 'Занимаюсь покраской автомобилей уже 16 лет'
                },
                {
                    id: 'c2',
                    firstName: 'Сергей',
                    lastName: 'Мормуль',
                    areas: ['рихтовка'],
                    description: 'Занимаюсь рихтовкой автомобилей 10 лет'
                },
            ]
        };
    },
    actions,
    mutations,
    getters
}