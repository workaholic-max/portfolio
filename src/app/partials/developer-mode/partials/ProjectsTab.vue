<script>
export default {
    name: 'ProjectsTab',
};
</script>

<script setup>
import LaunchIcon from '@/components/icons/LaunchIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkCard from '@/components/LinkCard';

/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        title: 'Architecture',
        repositoryLink: 'https://github.com/workaholic-max/architecture#readme',
        description:
            'A scalable architecture solution for Vue applications, designed for long-term maintainability, clear boundaries, predictable structure, and high codebase readability.',
    },

    {
        title: 'Alphabet',
        websiteLink: 'https://workaholic-max.github.io/alphabet/',
        description:
            'A structured representation of my developer mindset, using an A–Z system of principles designed to communicate how I approach building scalable, maintainable systems.',
    },

    {
        title: 'My Movie Diary',
        websiteLink: 'https://my-movie-diary--wm.web.app',
        description:
            'A web application for discovering, tracking, and organizing movies, with features for search, personal lists (favorites, watched, wishlist), and community-driven rankings. Includes user interactions, social features, and a structured system for managing movie-related data and user preferences.',
        stack: ['Vue', 'Vuex', 'SCSS', 'Vite', 'Firebase'],
    },
];

/*-----------------------------------------------------------------
                                Link
-----------------------------------------------------------------*/

const githubLink = {
    title: 'GitHub',
    subtitle: 'workaholic-max',
    href: 'https://github.com/workaholic-max',
    icon: { component: GitHubIcon, size: 33 },
};
</script>

<template>
    <section class="wm-projects-tab">
        <LinkCard :link="githubLink" />

        <h2>Public Repositories</h2>

        <article
            v-for="{ title, repositoryLink, websiteLink, description, stack } in config"
            :key="`project: ${title}`"
            class="wm-project-card"
        >
            <header>
                <h3>{{ title }}</h3>

                <a
                    :href="repositoryLink || websiteLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ repositoryLink ? 'View Repository' : 'Launch' }}

                    <LaunchIcon
                        :width="18"
                        :height="18"
                    />
                </a>
            </header>

            <p>
                {{ description }}
            </p>

            <ul v-if="stack?.length">
                <li
                    v-for="name in stack"
                    :key="`stack name: ${name}`"
                >
                    {{ name }}
                </li>
            </ul>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-projects-tab {
    display: flex;
    flex-direction: column;
    gap: $space;

    & > h2 {
        margin: $space 0;
        text-align: center;
    }
}

.wm-project-card {
    display: flex;
    flex-direction: column;

    @include block-UI(false);

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
</style>
