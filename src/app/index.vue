<script>
export default {
    name: 'App',
};
</script>

<script setup>
import Tabs from '@/components/Tabs';
import BiographyTab from './partials/BiographyTab';
import TechStackTab from './partials/TechStackTab';
import ExperienceTab from './partials/ExperienceTab';
import ProjectsTab from './partials/ProjectsTab';
import ContactDetailsTab from './partials/ContactDetailsTab';

/*-----------------------------------------------------------------
                                Tabs
-----------------------------------------------------------------*/

const tabsConfig = [
    { value: 0, text: 'Biography', component: BiographyTab },
    { value: 1, text: 'Tech Stack', component: TechStackTab },
    { value: 2, text: 'Experience', component: ExperienceTab },
    { value: 3, text: 'Projects', component: ProjectsTab },
    { value: 4, text: 'Contact Details', component: ContactDetailsTab },
];
</script>

<template>
    <main class="wm-app-layout">
        <Tabs
            :initial-tab="tabsConfig[0].value"
            :options="tabsConfig"
        >
            <template #content="{ tab }">
                <component :is="tabsConfig[tab].component" />
            </template>
        </Tabs>
    </main>
</template>

<style lang="scss">
.wm-app-layout {
    flex: 1;
    max-width: $tablet-breakpoint;
    width: 100%;
    margin: 0 auto;
    padding: $space $space--half;
}
</style>
