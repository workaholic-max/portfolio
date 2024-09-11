<script>
export default {
    name: 'App',
};
</script>

<script setup>
import { ref } from 'vue';

import { getRelativeImgSrc } from '@/utils/imgUtils';
import DeveloperMode from './partials/developer-mode';
import PersonMode from './partials/person-mode';

/*-----------------------------------------------------------------
                             Mode state
-----------------------------------------------------------------*/

const modeOptions = [
    { value: 0, text: 'Developer', imgPath: 'avatar--developer.jpg', component: DeveloperMode },
    { value: 1, text: 'Person', imgPath: 'avatar--person.jpg', component: PersonMode },
];

const activeMode = ref(0);
</script>

<template>
    <main class="wm-app-layout">
        <div class="wm-mode-switcher">
            <button
                v-for="{ value, text, imgPath } in modeOptions"
                :key="`mode switcher option: ${value}`"
                class="wm-mode-switcher__option"
                :class="{
                    'wm-mode-switcher__option--active': activeMode === value,
                }"
                @click="activeMode = value"
            >
                <img
                    alt="me"
                    :src="getRelativeImgSrc(imgPath)"
                />

                <span>{{ text }}</span>
            </button>
        </div>

        <transition
            name="slide-down"
            type="transition"
            mode="out-in"
        >
            <component
                :is="modeOptions[activeMode].component"
                :key="`active mode: ${activeMode}`"
            />
        </transition>
    </main>
</template>

<style lang="scss">
.wm-app-layout {
    flex: 1;
    max-width: $tablet-breakpoint;
    width: 100%;
    margin: 0 auto;
    padding: $space $space--half;
}

.wm-mode-switcher {
    display: flex;
    gap: $space--sm;
    margin-bottom: $space;

    @include block-UI(false, $space--sm);

    &__option {
        flex: 0 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: $space--half;
        padding: $space--sm $space--half;
        border: none;
        border-radius: $base-border-radius;
        transition: $base-transition;

        & > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }

        & > span {
            padding: $space--sm $space;
            border-radius: $base-border-radius;
            color: $inactive-color;
            font-weight: 700;
            transition: $base-transition;
        }

        &:not(&--active):hover,
        &--active {
            flex-grow: 1;

            & > span {
                color: $white;
            }
        }

        &:not(&--active):hover {
            background-color: $primary-color--transparent;
        }

        &--active {
            background-color: $primary-color;

            & > span {
                background-color: $secondary-color;
            }
        }
    }
}
</style>
