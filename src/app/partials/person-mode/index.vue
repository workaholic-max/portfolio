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
    { text: 'About Me', component: AboutMeTab },
    { text: 'Photographer', component: PhotographerTab },
    { text: 'Gamer', component: GamerTab },
    { text: 'Socials', component: SocialsTab },
    { text: 'Blitz time', component: BlitzTab },
];
</script>

<template>
    <Tabs :options="tabOptions" />
</template>
