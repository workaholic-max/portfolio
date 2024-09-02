<script>
export default {
    name: 'ContactDetailsTab',
};
</script>

<script setup>
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';
import LaunchIcon from '@/components/icons/LaunchIcon';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'GitHub',
        subtitle: 'workaholic-max',
        link: 'https://github.com/workaholic-max',
        icon: { component: GitHubIcon, size: 33 },
    },
    {
        title: 'LinkedIn',
        subtitle: 'Maksym Lukian',
        link: 'https://www.linkedin.com/in/maksym-lukian-workaholic/',
        icon: { component: LinkedInIcon, size: 35 },
    },
    {
        title: 'Telegram',
        subtitle: 'gl_maks_coder',
        link: 'https://t.me/gl_maks_coder',
        icon: { component: TelegramIcon, size: 28 },
    },
    {
        title: 'Instagram',
        subtitle: 'gl_maks_coder',
        link: 'https://www.instagram.com/gl_maks_coder/',
        icon: { component: InstagramIcon, size: 34 },
    },
    {
        title: 'Gmail',
        subtitle: 'lukyanmaksim@gmail.com',
        icon: { component: GoogleIcon, size: 30 },
    },
];
</script>

<template>
    <section class="wm-contact-details-tab">
        <article
            v-for="{ title, subtitle, link, icon } in config"
            :key="`contact: ${title}`"
            class="wm-contact-card"
        >
            <div class="wm-contact-card__wrapper">
                <div class="wm-contact-card__icon">
                    <component
                        :is="icon.component"
                        :width="icon.size"
                        :height="icon.size"
                    />
                </div>

                <div class="wm-contact-card__info">
                    <h3>{{ title }}</h3>

                    <span>{{ subtitle }}</span>
                </div>
            </div>

            <a
                v-if="!!link"
                target="_blank"
                rel="noopener noreferrer"
                :href="link"
            >
                Open

                <LaunchIcon
                    :width="18"
                    :height="18"
                />
            </a>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-contact-details-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}

.wm-contact-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space;

    @include block-UI();

    &__wrapper {
        display: flex;
        align-items: center;
        gap: $space;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        width: 46px;
        background-color: $primary-color;
        margin: -$space--half;
        margin-right: 0;
        padding: $space--half;
        border-radius: $base-border-radius 0 0 $base-border-radius;
    }

    &__info {
        & > h3 {
            font-size: 18px;
        }

        & > span {
            color: $text-color;
        }
    }

    & > a {
        @include btn-UI();
    }
}
</style>
