import TheClientLanding from '@/pages/TheClientLanding';
import TheMasterLanding from '@/pages/TheMasterLanding';
import TheLoginPage from '@/pages/TheLoginPage';
import TheRegistration from '@/pages/TheRegistration';
import TheAdminPanel from '@/pages/TheAdminPanel';
import TheFirstOrderStep from '@/pages/order/TheFirstOrderStep';
import TheSecondOrderStep from '@/pages/order/TheSecondOrderStep';
import TheThirdOrderStep from '@/pages/order/TheThirdOrderStep';
import TheFinalOrderStep from '@/pages/order/TheFinalOrderStep';
import TheNotifficationPage from '@/pages/TheNotifficationPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: TheClientLanding
    },
    {
        path: '/for-masters',
        component: TheMasterLanding
    },
    {
        path: '/registration',
        component: TheRegistration
    },
    {
        path: '/login',
        component: TheLoginPage
    },
    {
        path: '/order-first-step',
        component: TheFirstOrderStep
    },
    {
        path: '/order-second-step',
        component: TheSecondOrderStep
    },
    {
        path: '/order-third-step',
        component: TheThirdOrderStep
    },
    {
        path: '/order-final-step',
        component: TheFinalOrderStep
    },
    {
        path: '/admin-panel',
        component: TheAdminPanel
    },
    {
        path: '/notiffications',
        component: TheNotifficationPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;