<script>
export default {
    name: 'TechStackTab',
};
</script>

<script setup>
/*-----------------------------------------------------------------
                              General
-----------------------------------------------------------------*/

const config = [
    { label: 'Expert', stack: ['Vue', 'React', 'JavaScript', 'HTML', 'CSS'] },
    { label: 'Skilled', stack: ['Vuex', 'Redux', 'SCSS', 'UI/UX'] },
    { label: 'Familiar', stack: ['Docker', 'Vite', 'Websockets', 'Firebase'] },
    { label: 'Beginner', stack: ['Typescript', 'Python'] },
    { label: 'Prefer to Avoid', stack: ['Bootstrap', 'Tailwind', 'PrimeVue', 'WordPress'] },
];
</script>

<template>
    <section class="wm-tech-stack-tab">
        <article
            v-for="{ label, stack } in config"
            :key="`tech stack: ${label}`"
        >
            <h4>{{ label }}</h4>

            <ul>
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
.wm-tech-stack-tab {
    display: flex;
    flex-wrap: wrap;
    gap: $space;

    & > article {
        flex: 0 1 calc(33.33% - 2 / 3 * $space);
        display: flex;
        flex-direction: column;
        gap: $space;
        text-align: center;

        @include block-UI(false);

        @media screen and (max-width: $tablet-breakpoint) {
            flex: 0 1 calc(50% - 2 / 3 * $space);
        }

        @media screen and (max-width: $mobile-breakpoint) {
            flex: 1 1 100%;
        }

        & > h4 {
            font-size: 18px;

            @include block-UI();
        }

        & > ul {
            display: flex;
            flex-direction: column;
            gap: $space;
            padding-bottom: $space;
            font-size: 18px;
        }
    }
}
</style>
