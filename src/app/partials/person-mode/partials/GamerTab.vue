<script>
export default {
    name: 'GamerTab',
};
</script>

<script setup>
import { getRelativeImgSrc } from '@/utils/imgUtils';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    { name: 'World of Warcraft', logoSrc: 'WoW.png' },
    { name: 'Hearthstone', logoSrc: 'Hearthstone.png' },
    { name: 'Heroes of the Storm', logoSrc: 'HOTS.png' },
    { name: 'Valorant', logoSrc: 'Valorant.png' },
    { name: 'Apex Legends', logoSrc: 'Apex-Legends.png' },
    { name: 'Fall Guys', logoSrc: 'Fall-Guys.png' }
];
</script>

<template>
    <section class="wm-gamer-tab">
        <article
            v-for="{ name, logoSrc } in config"
            :key="`game: ${name}`"
            class="wm-game-card"
        >
            <div class="wm-game-card__img">
                <img
                    :src="getRelativeImgSrc(`games/${logoSrc}`)"
                    :alt="`${name} - logo`"
                />
            </div>

            <h3>{{ name }}</h3>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-gamer-tab {
    display: flex;
    flex-wrap: wrap;
    gap: $space;
}

.wm-game-card {
    flex: 0 1 calc(50% - 1 / 2 * $space);
    display: flex;
    flex-direction: column;
    gap: $space--sm;

    @include block-UI(false, $space--sm);

    @media screen and (max-width: $mobile-breakpoint) {
        flex: 1 1 100%;
    }

    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        padding: $space $space--half;
        background-color: $primary-color--transparent;
        border-radius: $base-border-radius;

        & > img {
            width: 75%;
            object-fit: contain;
        }
    }

    & > h3 {
        padding: $space--half;
        background-color: $primary-color--transparent;
        border-radius: $base-border-radius;
        text-align: center;
    }
}
</style>
