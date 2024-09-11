<script>
export default {
    name: 'BlitzTab',
};
</script>

<script setup>
/*-----------------------------------------------------------------
                           General state
-----------------------------------------------------------------*/

const config = [
    {
        question: 'What was your last search on Google?',
        answer: 'Blitz questions',
    },
    {
        question: "What's the most useful app on your phone?",
        answer: 'ChatGPT',
    },
    {
        question: "The best piece of advice you've ever received?",
        answer: "If it works don't touch it",
    },
    {
        question: "What's one hobby you’d like to start?",
        answer: 'Being Rich',
    },
    {
        question: 'Morning person or night owl?',
        answer: 'Good Morning!',
    },
    {
        question: 'An optimist or a pessimist?',
        answer: 'Realist',
    },
    {
        question: 'An introvert or an extrovert?',
        answer: 'Introvert',
    },
    {
        question: "One thing you can't live without?",
        answer: 'Coding',
    },
    {
        question: 'One piece of advice you ignore?',
        answer: 'Follow the latest trends',
    },
    {
        question: "What's one skill you'd love to master?",
        answer: 'Artificial Intelligence',
    },
    {
        question: 'How do you like to start your day?',
        answer: 'I wake up',
    },
    {
        question: 'Only one social link?',
        answer: "I don't really use social media",
    },
    {
        question: 'Any degree?',
        answer: "Bachelor's degree in Publishing and Printing, Yuriy Fedkovych Chernivtsi National University",
    },
    {
        question: 'What languages do you know?',
        answer: 'I know Ukrainian and English',
    },
    {
        question: 'How do you deal with stress?',
        answer: 'Coding, Walking, Gaming, Music',
    },

    {
        question: 'What song is currently stuck in your head?',
        answer: 'Linkin Park: The Emptiness Machine',
    },
    {
        question: "What's the last movie you watched?",
        answer: 'Ex Machina',
    },
    {
        question: "What's the last book you read?",
        answer: 'Sapiens: A Brief History of Humankind',
    },
    {
        question: "What's the one movie you'd recommend?",
        answer: 'Whiplash',
    },
    {
        question: "What's the one book you'd recommend?",
        answer: 'Mark Twain: The Mysterious Stranger',
    },
];
</script>

<template>
    <section class="wm-blitz-tab">
        <article class="wm-blitz-card">
            <div
                v-for="{ question, answer } in config"
                :key="`blitz: ${question}`"
                class="wm-blitz-card__block"
            >
                <h4>{{ question }}</h4>

                <p>{{ answer }}</p>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
.wm-blitz-tab {
    display: flex;
    flex-direction: column;
    gap: $space;
}

.wm-blitz-card {
    display: flex;
    flex-wrap: wrap;
    gap: $space * 2 $space;

    @include block-UI(false);

    @media screen and (max-width: $tablet-breakpoint) {
        flex-direction: column;
    }

    &__block {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        gap: $space--half;

        & > h4 {
            font-size: 14px;
        }

        & > p {
            color: $text-color;

            @include block-UI();

            @media screen and (min-width: $tablet-breakpoint) {
                font-weight: 500;
            }
        }
    }
}
</style>
