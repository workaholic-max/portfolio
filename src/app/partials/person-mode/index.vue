<script>
export default {
    name: 'PersonMode',
};
</script>

<script setup>
import Tabs from '@/components/Tabs';
import AboutMeTab from './partials/AboutMeTab';
import PhotographerTab from './partials/PhotographerTab';
import GamerTab from './partials/GamerTab';
import SocialsTab from './partials/SocialsTab';
import BlitzTab from './partials/BlitzTab';

/*-----------------------------------------------------------------
                                Tabs
-----------------------------------------------------------------*/

const tabOptions = [
    { value: 0, text: 'About Me', component: AboutMeTab },
    { value: 1, text: 'Photographer', component: PhotographerTab },
    { value: 2, text: 'Gamer', component: GamerTab },
    { value: 3, text: 'Socials', component: SocialsTab },
    { value: 4, text: 'Blitz time', component: BlitzTab },
];
</script>

<template>
    <Tabs :options="tabOptions" />
</template>
