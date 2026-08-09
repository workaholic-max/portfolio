<script>
export default {
    name: 'PhotographerTab',
};
</script>

<script setup>
import { getRelativeImgSrc } from '@/utils/imgUtils';
import TelegramIcon from '@/components/icons/TelegramIcon';
import LinkCard from '@/components/LinkCard';

/*-----------------------------------------------------------------
                           Gallery state
-----------------------------------------------------------------*/

const photos = [
    { file: 'squirrel-09.jpg', alt: 'Squirrel eating a walnut on a bare branch' },
    { file: 'squirrel-02.jpg', alt: 'Squirrel eating a nut on a tree trunk' },
    { file: 'squirrel-06.jpg', alt: 'Squirrel with a walnut among dry leaves' },
    { file: 'squirrel-03.jpg', alt: 'Squirrel hanging upside down near a fence' },
    { file: 'squirrel-11.jpg', alt: 'Squirrel eating in the snow at dusk' },
    { file: 'squirrel-08.jpg', alt: 'Squirrel eating in the snow, backlit' },
    { file: 'squirrel-07.jpg', alt: 'Squirrel in the snow, looking toward the camera' },
    { file: 'squirrel-10.jpg', alt: 'Squirrel eating a nut on a tree trunk' },
    { file: 'squirrel-01.jpg', alt: 'Squirrel perched on a branch among green leaves' },
    { file: 'squirrel-05.jpg', alt: 'Squirrel sniffing through dry leaves' },
    { file: 'squirrel-04.jpg', alt: 'Squirrel peeking out of a tree hollow' },
    { file: 'cat-01.jpg', alt: 'Cat watching from a window, curtains reflected in the glass' },
    { file: 'snail-01.jpg', alt: 'Snail resting on a green leaf' },
    { file: 'jay-01.jpg', alt: 'Eurasian jay standing in the grass' },
    { file: 'rose-01.jpg', alt: 'Yellow rose in bloom with a mural building in the background' },
    { file: 'crow-01.jpg', alt: 'Crow walking across dry leaves' },
    { file: 'bee-01.jpg', alt: 'Bee inside a white hibiscus flower' },
    { file: 'rooftop-01.jpg', alt: 'Rooftop ladder against a clear blue sky' },
    { file: 'pigeon-01.jpg', alt: 'Pigeon perched on a streetlamp' },
    { file: 'sunflower-01.jpg', alt: 'Sunflower in bloom' },
    { file: 'cat-02.jpg', alt: 'Tortoiseshell cat looking through a railing' },
    { file: 'dove-01.jpg', alt: 'Dove perched on a bare branch at dusk' },
    { file: 'bee-02.jpg', alt: 'Bee pollinating a white peony' },
    { file: 'portrait-01.jpg', alt: 'Backlit portrait silhouette' },
];

const galleryConfig = photos.map(({ file, alt }, index) => ({
    imgSrc: getRelativeImgSrc(`gallery/${file}`),
    alt,
    loading: index < 3 ? 'eager' : 'lazy',
    fetchpriority: index === 0 ? 'high' : undefined,
}));

/*-----------------------------------------------------------------
                                Link
-----------------------------------------------------------------*/

const telegramChannelLink = {
    title: 'Telegram Channel',
    subtitle: 'gl_maks_photographer',
    href: 'https://t.me/+7SLvtqBa3jFiZjU6',
    icon: { component: TelegramIcon, size: 28 },
};
</script>

<template>
    <section class="wm-photographer-tab">
        <LinkCard :link="telegramChannelLink" />

        <div class="wm-photographer-tab__gallery">
            <article
                v-for="{ imgSrc, alt, loading, fetchpriority } in galleryConfig"
                :key="`photo: ${imgSrc}`"
            >
                <p>
                    <img
                        :src="imgSrc"
                        :alt="alt"
                        :loading="loading"
                        :fetchpriority="fetchpriority"
                        width="1695"
                        height="2560"
                    />
                </p>
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
        gap: $space--half;

        & > article {
            flex: 0 1 calc(50% - 1 / 2 * $space--half);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: $space--half;
            background-color: $primary-color--transparent;
            border-radius: $base-border-radius;

            @media screen and (max-width: $mobile-breakpoint) {
                flex: 1 1 100%;
            }

            & > p {
                width: 100%;
                aspect-ratio: 1695 / 2560;
                overflow: hidden;
                background-color: $primary-color;
                border-radius: inherit;

                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    border-radius: inherit;
                }
            }
        }
    }
}
</style>
