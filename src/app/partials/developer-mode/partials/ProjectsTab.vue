<script>
export default {
    name: 'ProjectsTab',
};
</script>

<script setup>
import { getRelativeImgSrc } from '@/utils/imgUtils';
import LaunchIcon from '@/components/icons/LaunchIcon';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'My Movie Diary',
        link: 'https://my-movie-diary--wm.web.app',
        logoSrc: 'MMD.png',
        description:
            'Developed  a platform for movie enthusiasts to discover, track, and share their favorite films. The app allows users to search for movies, mark them as favorites, watched, or add them to a wishlist. It also features a community-driven section showcasing the most popular movies, chosen by user votes and  features for connecting with friends and sharing movie experiences.',
        stack: ['Vue', 'Vuex', 'SCSS', 'Vite', 'Firebase'],
    },
];
</script>

<template>
    <section class="wm-projects-tab">
        <article
            v-for="{ title, link, logoSrc, description, stack } in config"
            :key="`project: ${title}`"
            class="wm-project-card"
        >
            <aside>
                <img
                    :src="getRelativeImgSrc(`projects/${logoSrc}`)"
                    :alt="`${title} logo`"
                />
            </aside>

            <div class="wm-project-card__wrapper">
                <header>
                    <h3>{{ title }}</h3>

                    <a
                        :href="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Launch

                        <LaunchIcon
                            :width="18"
                            :height="18"
                        />
                    </a>
                </header>

                <p>
                    {{ description }}
                </p>

                <ul>
                    <li
                        v-for="name in stack"
                        :key="`stack name: ${name}`"
                    >
                        {{ name }}
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-projects-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}

.wm-project-card {
    display: flex;
    gap: $space--half;

    @include block-UI(false);

    @media screen and (max-width: $tablet-breakpoint) {
        flex-direction: column;
    }

    & > aside {
        flex: 0 0 125px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: $space--half;
        margin: -$space--half;
        margin-right: 0;

        @include block-UI(true, null, (4px 0 0 4px));

        @media screen and (max-width: $tablet-breakpoint) {
            flex: 1 1 auto;
            padding: $space;
            margin: -$space--half;
            margin-bottom: 0;
            border-radius: $base-border-radius $base-border-radius 0 0;
        }

        & > img {
            width: 90px;
            object-fit: contain;
            border-radius: $base-border-radius;

            @media screen and (max-width: $tablet-breakpoint) {
                width: 75px;
            }
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;

        & > header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: $space--half;

            @include block-UI(true, ($space--sm $space--sm $space--sm $space--half));

            & > h3 {
                font-size: 20px;
            }

            & > a {
                @include btn-UI();
            }
        }

        & > p {
            color: $text-color;

            @include block-UI();
        }

        & > ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: $space--half;
            margin-top: $space--half;

            & > li {
                @include badge-UI();
            }
        }
    }
}
</style>
