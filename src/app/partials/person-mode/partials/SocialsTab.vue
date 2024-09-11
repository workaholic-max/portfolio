<script>
export default {
    name: 'SocialsTab',
};
</script>

<script setup>
import InstagramIcon from '@/components/icons/InstagramIcon';
import LaunchIcon from '@/components/icons/LaunchIcon';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'Instagram',
        subtitle: 'gl_maks_coder',
        link: 'https://www.instagram.com/gl_maks_coder/',
        icon: { component: InstagramIcon, size: 34 },
    },
];
</script>

<template>
    <section class="wm-socials-tab">
        <article
            v-for="{ title, subtitle, link, icon } in config"
            :key="`social: ${title}`"
            class="wm-social-card"
        >
            <div class="wm-social-card__wrapper">
                <div class="wm-social-card__icon">
                    <component
                        :is="icon.component"
                        :width="icon.size"
                        :height="icon.size"
                    />
                </div>

                <div class="wm-social-card__info">
                    <h3>{{ title }}</h3>

                    <span>{{ subtitle }}</span>
                </div>
            </div>

            <a
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
.wm-socials-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}

.wm-social-card {
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
