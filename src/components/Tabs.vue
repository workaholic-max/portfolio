<script>
export default {
    name: 'Tabs',
};
</script>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    initialTab: {
        type: [String, Number],
        default: null,
    },
    options: {
        type: Array,
        required: true,
    },
});

/*------------------------------------------------------------------------
                                Tabs state
------------------------------------------------------------------------*/

const containerRef = ref(null);
const activeTab = ref(props.initialTab);

const scrollIntoTabView = (tab) => {
    const tabIndex = props.options.findIndex(({ value }) => tab === value);

    const tabEl = containerRef.value.children[tabIndex];

    const containerLeft = containerRef.value.getBoundingClientRect().left;
    const tabLeft = tabEl.getBoundingClientRect().left;

    const scrollPosition = containerRef.value.scrollLeft + (tabLeft - containerLeft);

    containerRef.value.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
};

const changeTab = (tab) => {
    activeTab.value = tab;

    scrollIntoTabView(tab);
};
</script>

<template>
    <div class="wm-tabs">
        <div
            ref="containerRef"
            class="wm-tabs__options"
        >
            <button
                v-for="{ value, text } in options"
                :key="`tab option: ${value}`"
                type="button"
                class="wm-tabs__option"
                :class="{
                    'wm-tabs__option--active': activeTab === value,
                }"
                @click="changeTab(value)"
            >
                {{ text }}
            </button>
        </div>

        <transition
            appear
            name="slide-down"
            type="transition"
            mode="out-in"
        >
            <div
                :key="`tab content: ${activeTab}`"
                class="wm-tabs__content"
            >
                <slot
                    name="content"
                    :tab="activeTab"
                />
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.wm-tabs {
    display: flex;
    flex-direction: column;

    &__options {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 3px;
        margin-bottom: $space;
        overflow-x: auto;
        z-index: 2;

        @include block-UI(true, false);

        &::-webkit-scrollbar-track {
            background-color: $secondary-color;
        }

        &::-webkit-scrollbar-thumb {
            border-color: $secondary-color;
        }
    }

    &__option {
        flex: 0 0 auto;
        position: relative;
        padding: $space $space * 2;
        border-radius: $base-border-radius;
        border: none;
        font-size: 18px;
        font-weight: 500;
        color: rgba($white, 0.5);
        transition: $base-transition;

        @media screen and (max-width: $tablet-breakpoint) {
            font-size: 16px;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background-color: transparent;
            border-radius: inherit;
            transform-origin: center;
            transform: scale(0);
            z-index: -1;
            transition: $base-transition;
        }

        &--active,
        &:not(&--active):hover {
            flex-grow: 1;
            color: $white;

            &::after {
                transform: scale(1);
            }
        }

        &--active::after {
            background-color: $secondary-color;
        }

        &:not(&--active):hover::after {
            background-color: $secondary-color--transparent;
        }
    }

    &__content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>
