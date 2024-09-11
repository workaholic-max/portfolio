<script>
export default {
    name: 'AboutMeTab',
};
</script>

<script setup>
/*-----------------------------------------------------------------
                             Interests
-----------------------------------------------------------------*/

const interestsConfig = [
    'Coding',
    'Resolving Issues',
    'Photography',
    'Gaming',
    'Listening to Music',
    'Watching Movies',
    'Science',
    'Philosophy',
];

/*-----------------------------------------------------------------
                        Favorite music bands
-----------------------------------------------------------------*/

const favoriteMusicBandsConfig = [
    'Three Days Grace',
    'Rise Against',
    'Foo Fighters',
    'Linkin Park',
    'Sum 41',
    'Thousand Foot Krutch',
    'Breaking Benjamin',
    'Noize MC',
    'Oxxxymiron',
    'Pornofilmy',
];

/*-----------------------------------------------------------------
                          Favorite movies
-----------------------------------------------------------------*/

const favoriteMoviesConfig = [
    'Law Abiding Citizen',
    'V For Vendetta',
    'Whiplash',
    'House',
    'American Hangman',
    'The Dark Knight',
    'Ex Machina',
    'American History X',
    'Warcraft',
    'The Ledge',
];
</script>

<template>
    <section class="wm-about-me-tab">
        <div class="wm-about-me-tab__intro">
            <div class="wm-about-me-tab__avatar">
                <img
                    src="@/assets/images/avatar--person.jpg"
                    alt="literally me"
                />
            </div>

            <div class="wm-about-me-tab__description">
                <h2>Maksym Lukian</h2>

                <p>
                    A human with 22 years of successful existence on Earth, born in Ukraine, Chernivtsi, on 1 May 2002.
                    Currently thriving as a Front-End Developer, recognized for a calm, objective mindset and driven by
                    a passion for continuous learning, constantly seeking opportunities to grow.
                </p>
            </div>
        </div>

        <article class="wm-about-me-card">
            <div class="wm-about-me-card__block wm-about-me-card__block--full">
                <h4>Interests & Hobbies</h4>

                <ul>
                    <li
                        v-for="interest in interestsConfig"
                        :key="`interest: ${interest}`"
                    >
                        {{ interest }}
                    </li>
                </ul>
            </div>
        </article>

        <article class="wm-about-me-card">
            <div class="wm-about-me-card__block wm-about-me-card__block">
                <h4>Favorite Music Bands</h4>

                <ul>
                    <li
                        v-for="musicBand in favoriteMusicBandsConfig"
                        :key="`music band: ${musicBand}`"
                    >
                        {{ musicBand }}
                    </li>
                </ul>
            </div>

            <div class="wm-about-me-card__block wm-about-me-card__block">
                <h4>Favorite Movies</h4>

                <ul>
                    <li
                        v-for="movie in favoriteMoviesConfig"
                        :key="`movie: ${movie}`"
                    >
                        {{ movie }}
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-about-me-tab {
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
        }
    }

    &__avatar {
        flex-shrink: 0;
        width: 185px;
        height: 210px;

        @include block-UI(true, $space--sm);

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
}

.wm-about-me-card {
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

        &--full {
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
