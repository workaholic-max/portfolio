<script>
export default {
    name: 'BiographyTab',
};
</script>

<script setup>
/*-----------------------------------------------------------------
                            General info
-----------------------------------------------------------------*/

const generalInfoConfig = [
    { title: 'Full Name', content: 'Maksym Lukian' },
    { title: 'Known as', content: 'workaholic' },
    { title: 'Years of Experience', content: 'Since December 2020' },
    { title: 'Born', content: 'Earth, Ukraine, 2002' },
    { title: 'Location', content: 'Ukraine, Chernivtsi' },
    { title: 'Developing at', content: 'Sweet Stack Digital' },
];

/*-----------------------------------------------------------------
                             Languages
-----------------------------------------------------------------*/

const languagesConfig = ['Ukrainian — Native', 'English — B2', 'Romanian — Mixed'];

/*-----------------------------------------------------------------
                               Skills
-----------------------------------------------------------------*/

const skillsConfig = [
    'Problem Solving',
    'Attention to Detail',
    'Continuous Learning',
    'Adaptability',
    'Creativity',
    'Communication',
    'Critical Thinking',
    'Conflict Resolution',
];

/*-----------------------------------------------------------------
                             Challenges
-----------------------------------------------------------------*/

const currentChallengesConfig = ['Fresh UI/UX', 'Python', 'AI & ML'];

const upcomingChallengesConfig = ['C++', 'GameDev', 'AI Model'];
</script>

<template>
    <section class="wm-biography-tab">
        <div class="wm-biography-tab__intro">
            <div class="wm-biography-tab__avatar">
                <img
                    src="@/assets/images/avatar.jpg"
                    alt="literally me"
                />
            </div>

            <div class="wm-biography-tab__description">
                <h2>Senior Front-End Developer</h2>

                <p>
                    Developer with almost 4 years of successful experience in web development. My strengths are good
                    knowledge of the object-oriented approach, software engineering principles, and concepts, and high
                    level of analytical thinking. Good team player, responsible. Always looking forward for new
                    challenges. Fast and efficient learning is what I am all about.
                </p>
            </div>
        </div>

        <article class="wm-biography-card">
            <div
                v-for="{ title, content } in generalInfoConfig"
                :key="`general info: ${title}`"
                class="wm-biography-card__block"
            >
                <h4>{{ title }}</h4>

                <p>{{ content }}</p>
            </div>

            <div class="wm-biography-card__block">
                <h4>Languages</h4>

                <ul>
                    <li
                        v-for="language in languagesConfig"
                        :key="`language: ${language}`"
                    >
                        {{ language }}
                    </li>
                </ul>
            </div>
        </article>

        <article class="wm-biography-card">
            <div class="wm-biography-card__block wm-biography-card__block--skills">
                <h4>Skills</h4>

                <ul>
                    <li
                        v-for="skill in skillsConfig"
                        :key="`skill: ${skill}`"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </article>

        <article class="wm-biography-card">
            <div class="wm-biography-card__block">
                <h4>Current Challenges</h4>

                <ul>
                    <li
                        v-for="challenge in currentChallengesConfig"
                        :key="`current challenge: ${challenge}`"
                    >
                        {{ challenge }}
                    </li>
                </ul>
            </div>

            <div class="wm-biography-card__block">
                <h4>Upcoming Challenges</h4>

                <ul>
                    <li
                        v-for="challenge in upcomingChallengesConfig"
                        :key="`upcoming challenge: ${challenge}`"
                    >
                        {{ challenge }}
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-biography-tab {
    display: flex;
    flex-direction: column;
    gap: $space;

    &__intro {
        display: flex;
        align-items: flex-end;
        gap: $space;

        @media screen and (max-width: $tablet-breakpoint) {
            flex-direction: column;
            align-items: flex-start;
            gap: $space * 1.5;
        }
    }

    &__avatar {
        flex-shrink: 0;
        width: 185px;
        height: 210px;

        @include block-UI();

        & > img {
            width: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }

    &__description {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: $space--half;

        & > h2 {
            font-size: 24px;
        }

        & > p {
            color: $text-color;

            @include block-UI();
        }
    }

    &__divider {
        height: 2px;
        background-color: $primary-color;
        border-radius: 100px;
    }
}

.wm-biography-card {
    display: flex;
    flex-wrap: wrap;
    gap: $space * 2 $space;

    @include block-UI(false);

    @media screen and (max-width: $tablet-breakpoint) {
        flex-direction: column;
    }

    &__block {
        flex: 0 1 calc(50% - 1 / 2 * $space);
        display: flex;
        flex-direction: column;
        gap: $space--half;

        @media screen and (max-width: $tablet-breakpoint) {
            flex: 1 1 auto;
        }

        & > h4 {
            font-size: 14px;
        }

        & > p,
        & > ul {
            color: $text-color;

            @include block-UI();

            @media screen and (min-width: $tablet-breakpoint) {
                font-weight: 500;
            }
        }

        & > ul {
            display: flex;
            flex-direction: column;
            gap: $space--half;
        }

        &--skills {
            flex: 1 1 auto;

            & > ul {
                flex-direction: row;
                flex-wrap: wrap;
                gap: $space--half $space;

                @media screen and (max-width: $tablet-breakpoint) {
                    flex-direction: column;
                }

                & > li {
                    @media screen and (min-width: $tablet-breakpoint) {
                        flex: 0 1 calc(50% - 1 / 2 * $space);
                    }
                }
            }
        }
    }
}
</style>
