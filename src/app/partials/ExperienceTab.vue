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
        position: 'Senior Front-End Developer',
        description:
            'Created an intuitive platform to enhance internal operations for a restaurant network, focusing on centralized order management, team coordination, and inventory tracking. The solution incorporated advanced features like real-time tracking of leftovers, production, and packing processes, all within a minimalistic, user-friendly interface.',
        stack: ['Vue', 'Vuex', 'SCSS', 'Docker', 'Websockets', 'Vite'],
    },

    {
        startDate: 'February 2022',
        endDate: 'April 2023',
        companyName: 'Sweet Stack Digital',
        position: 'Middle-Strong React Developer',
        description:
            'Complex system that offers travel concierge services along with access to exclusive offers to hotels and resorts worldwide. Under the hood, it combines state-of-the-art CRM system for travel stylists, sophisticated scoring and suggestion algorithms, multiple third party API integrations and a booking engine that crunches millions of pieces of data daily.',
        stack: ['React', 'Redux', 'SCSS', 'Docker'],
    },

    {
        startDate: 'June 2021',
        endDate: 'February 2022',
        companyName: 'EPAM',
        position: 'Middle React Developer',
        description:
            'Section based CMS system that allows its customers to create large company websites and blogs acting like an ecosystem of reusable components and data inputs. Mostly focused on better user experience both for visitors and for content manages using eye catching soft design and smooth animations.',
        stack: ['React', 'Redux', 'Typescript'],
    },

    {
        startDate: 'December 2020',
        endDate: 'June 2021',
        companyName: 'EPAM',
        position: 'Junior React Developer',
        description:
            'Application for large retailer companies help to organize business process monitoring. Includes warehouse tracking, orders and shipping management, paying and credit memo record of company vendor and retailers.',
        stack: ['React', 'Redux', 'Bootstrap'],
    },
];
</script>

<template>
    <section class="wm-experience-tab">
        <article
            v-for="{ startDate, endDate, companyName, position, description, stack } in config"
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
            margin: $space--half 0;

            @include block-UI();
        }

        & > ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: $space--half;

            & > li {
                @include badge-UI();
            }
        }
    }
}
</style>
