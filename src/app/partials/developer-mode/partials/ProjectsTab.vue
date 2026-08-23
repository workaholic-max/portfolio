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
        title: 'Dev Lab',
        repositoryLink: 'https://github.com/workaholic-max/dev-lab#readme',
        description:
            'A public record of the code worth keeping and the practices behind it — real, reusable pieces pulled from my TypeScript / Vue 3 projects, documented with the actual reasoning and trade-offs behind each one, plus the Claude Code toolkit I use to build all of it efficiently.',
    },

    {
        title: 'Architecture',
        repositoryLink: 'https://github.com/workaholic-max/architecture#readme',
        description:
            'A reference architecture for Vue 3 applications (TypeScript, Vite, Pinia, Vue Router) that scales from small to large projects. Code is organized into clear layers — app, domains, features, shared, api, router — with import boundaries enforced by ESLint for long-term maintainability, predictable structure, and high readability.',
    },

    {
        title: 'Alphabet',
        websiteLink: 'https://workaholic-max.github.io/alphabet/',
        description:
            'A structured representation of my developer mindset, using an A–Z system of principles designed to communicate how I approach building scalable, maintainable systems.',
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
