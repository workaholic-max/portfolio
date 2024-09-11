<script>
export default {
    name: 'DeveloperMode',
};
</script>

<script setup>
import Tabs from '@/components/Tabs.vue';
import BiographyTab from './partials/BiographyTab';
import TechStackTab from './partials/TechStackTab';
import ExperienceTab from './partials/ExperienceTab';
import ProjectsTab from './partials/ProjectsTab';
import ContactsTab from './partials/ContactsTab';

/*-----------------------------------------------------------------
                                Tabs
-----------------------------------------------------------------*/

const tabOptions = [
    { value: 0, text: 'Biography', component: BiographyTab },
    { value: 1, text: 'Tech Stack', component: TechStackTab },
    { value: 2, text: 'Experience', component: ExperienceTab },
    { value: 3, text: 'Projects', component: ProjectsTab },
    { value: 4, text: 'Contacts', component: ContactsTab },
];
</script>

<template>
    <Tabs :options="tabOptions" />
</template>
