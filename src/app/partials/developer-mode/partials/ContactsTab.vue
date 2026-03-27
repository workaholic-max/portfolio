<script>
export default {
    name: 'ContactsTab',
};
</script>

<script setup>
import LinkCard from '@/components/LinkCard';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'LinkedIn',
        subtitle: 'Maksym Lukian',
        href: 'https://www.linkedin.com/in/maksym-lukian-workaholic/',
        icon: { component: LinkedInIcon, size: 35 },
    },
    {
        title: 'Telegram',
        subtitle: 'gl_maks_coder',
        href: 'https://t.me/gl_maks_coder',
        icon: { component: TelegramIcon, size: 28 },
    },
    {
        title: 'Gmail',
        subtitle: 'lukyanmaksim@gmail.com',
        icon: { component: GoogleIcon, size: 30 },
    },
];
</script>

<template>
    <section class="wm-contacts-tab">
        <LinkCard
            v-for="(link, index) in config"
            :key="`contact: ${index}`"
            :link="link"
        />
    </section>
</template>

<style lang="scss" scoped>
.wm-contacts-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}
</style>
