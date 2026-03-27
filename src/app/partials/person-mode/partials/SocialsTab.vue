<script>
export default {
    name: 'SocialsTab',
};
</script>

<script setup>
import LinkCard from '@/components/LinkCard';
import InstagramIcon from '@/components/icons/InstagramIcon';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'Instagram',
        subtitle: 'gl_maks_coder',
        href: 'https://www.instagram.com/gl_maks_coder/',
        icon: { component: InstagramIcon, size: 34 },
    },
];
</script>

<template>
    <section class="wm-socials-tab">
        <LinkCard
            v-for="(link, index) in config"
            :key="`social: ${index}`"
            :link="link"
        />
    </section>
</template>

<style lang="scss" scoped>
.wm-socials-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}
</style>
