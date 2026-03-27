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
    { text: 'Biography', component: BiographyTab },
    { text: 'Tech Stack', component: TechStackTab },
    { text: 'Experience', component: ExperienceTab },
    { text: 'Projects', component: ProjectsTab },
    { text: 'Contacts', component: ContactsTab },
];
</script>

<template>
    <Tabs :options="tabOptions" />
</template>
