<template>
    <the-header></the-header>
    <div className="container">
            <div className="adminPanelBlock">
                <h1>Панель управления</h1>
                <h3>Мои текущие работы</h3>
                <div className="adminSectionsBlock">
                   <the-works-preview></the-works-preview>
                   <the-works-preview></the-works-preview>
                   <the-works-preview></the-works-preview>
                </div>
                <h3>Работы в поиске мастера</h3>
                <div className="adminSectionsBlock">
                   <the-published-work-preview></the-published-work-preview>
                   <the-published-work-preview></the-published-work-preview>
                </div>
                <h3>Найди автомастера или сервис</h3>
                <div className="adminSectionsBlock">
                    <the-master-preview></the-master-preview>
                    <the-master-preview></the-master-preview>
                    <the-master-preview></the-master-preview>
                    <the-master-preview></the-master-preview>
                </div>
            </div>
        </div>
    <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheEmptyBlock from '@/components/TheEmptyBlock.vue'
import TheWorksPreview from '@/components/TheWorksPreview.vue';
import TheMasterPreview from '@/components/TheMasterPreview.vue';
import ThePublishedWorkPreview from '@/components/ThePublishedWorkPreview.vue';


export default {
    components: {
        TheHeader, TheFooter, TheWorksPreview, TheEmptyBlock, TheMasterPreview, ThePublishedWorkPreview
    }
}
</script>

<style scoped>
.adminPanelBlock {
    margin: 100px 0;
}

.adminPanelBlock h3 {
    margin: 90px 0 40px 0;
}

.adminSectionsBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>