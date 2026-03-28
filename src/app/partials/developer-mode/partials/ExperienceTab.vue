<script>
export default {
    name: 'ExperienceTab',
};
</script>

<script setup>
/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        startDate: 'April 2023',
        endDate: 'Present',
        companyName: 'Sweet Stack Digital',
        position: 'Senior Frontend Developer',
        description: 'Led development of multiple frontend projects from scratch.',
        highlights: [
            'Architected scalable frontend applications using Vue ecosystem',
            'Took ownership of feature development from requirements to deliver',
            'Collaborated with clients to define requirements, shape implementation decisions, and proactively propose improvements aligned with product goals',
            'Supported and improved production applications, ensuring stability and performance based on real user feedback and usage patterns',
            'Mentored developers and contributed to code quality through guidance',
            'Migrated from Webpack to Vite, improving development and build performance',
            'Transitioned from npm to pnpm for better dependency handling',
            'Implemented real-time features using WebSockets for live data updates',
            'Integrated external services including OpenAI and third-party APIs',
            'Worked across multiple UI stacks (Tailwind, PrimeVue) depending on project',
            'Improved developer experience and deployment workflows using Docker',
        ],
        stack: ['Vue', 'Vuex', 'SCSS', 'Docker', 'Websockets', 'Vite'],
    },

    {
        startDate: 'February 2022',
        endDate: 'April 2023',
        companyName: 'Sweet Stack Digital',
        position: 'Middle-Strong React Developer',
        description: 'High-load travel platform with complex booking flows.',
        highlights: [
            'Developed complex, data-driven UI features and business-critical flows',
            'Integrated multiple third-party APIs and handled asynchronous data processing',
            'Managed and structured application state for scalability and maintainability',
            'Configured and optimized Webpack build setup for development and production',
            'Improved performance and reliability of the application under high data load',
        ],
        stack: ['React', 'Redux', 'SCSS', 'Docker'],
    },

    {
        startDate: 'June 2021',
        endDate: 'February 2022',
        companyName: 'EPAM',
        position: 'Middle React Developer',
        description: 'Component-driven CMS platform for building dynamic websites and blogs.',
        highlights: [
            'Developed and maintained modular, reusable component architecture',
            'Implemented complex UI features and interactive user flows',
            'Built and maintained type-safe code using TypeScript',
            'Managed application state using Redux in a scalable way',
            'Integrated and handled REST APIs with proper data flow control',
        ],
        stack: ['React', 'Redux', 'Typescript'],
    },

    {
        startDate: 'December 2020',
        endDate: 'June 2021',
        companyName: 'EPAM',
        position: 'Junior React Developer',
        description: 'Enterprise retail system for warehouse tracking and order processing.',
        highlights: [
            'Built reusable components using React and Redux',
            'Implemented pixel-perfect UI based on design specifications',
            'Integrated REST APIs for core data flows',
            'Collaborated within a team following established development practices',
        ],
        stack: ['React', 'Redux', 'Bootstrap'],
    },
];
</script>

<template>
    <section class="wm-experience-tab">
        <article
            v-for="{ startDate, endDate, companyName, position, description, highlights, stack } in config"
            :key="`experience: ${startDate}`"
            class="wm-experience-card"
        >
            <aside>
                <b>{{ endDate }}</b>
                <b>{{ startDate }}</b>
            </aside>

            <div class="wm-experience-card__wrapper">
                <header>
                    <b>{{ position }}</b>
                    <span>{{ companyName }}</span>
                </header>

                <p>
                    {{ description }}
                </p>

                <div class="wm-experience-card__highlights">
                    <ul>
                        <li
                            v-for="(highlight, index) in highlights"
                            :key="index"
                        >
                            {{ highlight }}
                        </li>
                    </ul>
                </div>

                <ul class="wm-experience-card__stack">
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
.wm-experience-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}

.wm-experience-card {
    display: flex;
    gap: $space--half;

    @include block-UI(false);

    @media screen and (max-width: $tablet-breakpoint) {
        flex-direction: column;
    }

    & > aside {
        flex: 0 0 125px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: $space--half;

        @include block-UI();

        @media screen and (max-width: $tablet-breakpoint) {
            flex: 1 1 auto;
            flex-direction: row;
        }

        & > b {
            width: min-content;
            text-align: center;
            line-height: 1.25;
            font-weight: 700;

            @media screen and (max-width: $tablet-breakpoint) {
                width: auto;
                line-height: 1;
            }
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: $space--half;
        width: 100%;

        & > header {
            display: flex;
            flex-direction: column;

            @include block-UI();

            & > b {
                font-size: 16px;
            }
        }

        & > p {
            color: $text-color;

            @include block-UI();
        }
    }

    &__stack {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: $space--half;

        & > li {
            @include badge-UI();
        }
    }

    &__highlights {
        @include block-UI();

        > ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding-left: 20px;

            & > li {
                list-style: disc;
                line-height: 1.25;
            }
        }
    }
}
</style>
