<script>
export default {
    name: 'PhotographerTab',
};
</script>

<script setup>
import { computed } from 'vue';

import { getRelativeImgSrc } from '@/utils/imgUtils';
import TelegramIcon from '@/components/icons/TelegramIcon';
import LaunchIcon from '@/components/icons/LaunchIcon';

/*-----------------------------------------------------------------
                           Gallery state
-----------------------------------------------------------------*/

const galleryConfig = computed(() => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const images = [
        'photo_10.08.2024--1.jpg',
        'photo_10.08.2024--2.jpg',
        'photo_10.08.2024--3.jpg',
        'photo_10.08.2024--4.jpg',
        'photo_29.07.2024--1.jpg',
        'photo_15.07.2024--1.jpg',
        'photo_23.05.2024--1.jpg',
        'photo_23.05.2024--2.jpg',
        'photo_28.04.2024--1.jpg',
    ];

    return images.map((imgSrc) => {
        const [, day, month, year] = imgSrc.match(/photo_(\d{2})\.(\d{2})\.(\d{4})/);

        const monthName = months[month - 1];

        return {
            imgSrc: getRelativeImgSrc(`gallery/${imgSrc}`),
            date: `${day} ${monthName} ${year}`,
        };
    });
});
</script>

<template>
    <section class="wm-photographer-tab">
        <div class="wm-photographer-link">
            <div class="wm-photographer-link__wrapper">
                <div class="wm-photographer-link__icon">
                    <TelegramIcon
                        :width="28"
                        :height="28"
                    />
                </div>

                <div class="wm-photographer-link__info">
                    <h3>Telegram Channel</h3>

                    <span>gl_maks_photographer</span>
                </div>
            </div>

            <a
                href="https://t.me/+7SLvtqBa3jFiZjU6"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open

                <LaunchIcon
                    :width="18"
                    :height="18"
                />
            </a>
        </div>

        <div class="wm-photographer-tab__gallery">
            <article
                v-for="{ imgSrc, date } in galleryConfig"
                :key="`photo: ${imgSrc}`"
            >
                <p>
                    <img
                        :src="imgSrc"
                        :alt="`photo: ${date}`"
                    />
                </p>

                <span>{{ date }}</span>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wm-photographer-tab {
    display: flex;
    flex-direction: column;
    gap: $space;

    &__gallery {
        display: flex;
        flex-wrap: wrap;
        gap: $space--sm;

        & > article {
            flex: 0 1 calc(33.33% - 2 / 3 * $space--sm);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: $space--half;
            background-color: $primary-color--transparent;
            padding: $space--sm;
            border: 1px solid $primary-color;
            border-radius: $base-border-radius;

            @media screen and (max-width: $tablet-breakpoint) {
                flex: 0 1 calc(50% - 1 / 2 * $space--sm);
            }

            @media screen and (max-width: $mobile-breakpoint) {
                flex: 1 1 100%;
            }

            & > p {
                background-color: $primary-color;
                border-radius: inherit;

                & > img {
                    border-radius: inherit;
                }
            }

            & > span {
                color: $text-color;
            }
        }
    }
}

.wm-photographer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space;

    @include block-UI();

    &__wrapper {
        display: flex;
        align-items: center;
        gap: $space;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        width: 46px;
        background-color: $primary-color;
        margin: -$space--half;
        margin-right: 0;
        padding: $space--half;
        border-radius: $base-border-radius 0 0 $base-border-radius;
    }

    &__info {
        & > h3 {
            font-size: 18px;
        }

        & > span {
            color: $text-color;
        }
    }

    & > a {
        @include btn-UI();
    }
}
</style>
