<script>
export default {
    name: 'LinkCard',
};
</script>

<script setup>
import LaunchIcon from '@/components/icons/LaunchIcon';

defineProps({
    link: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <article class="wm-link-card">
        <div class="wm-link-card__wrapper">
            <div class="wm-link-card__icon">
                <component
                    :is="link.icon.component"
                    :width="link.icon.size"
                    :height="link.icon.size"
                />
            </div>

            <div class="wm-link-card__info">
                <h3>{{ link.title }}</h3>

                <span>{{ link.subtitle }}</span>
            </div>
        </div>

        <a
            v-if="!!link.href"
            target="_blank"
            rel="noopener noreferrer"
            :href="link.href"
        >
            Open

            <LaunchIcon
                :width="18"
                :height="18"
            />
        </a>
    </article>
</template>

<style lang="scss" scoped>
.wm-link-card {
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
