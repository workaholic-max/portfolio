<script>
export default {
    name: 'PhoneIcon',
};
</script>

<script setup>
defineProps({
    width: {
        type: Number,
        default: 24,
    },
    height: {
        type: Number,
        default: 24,
    },
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        :width="width"
        :height="height"
    >
        <path
            fill-rule="evenodd"
            d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
            clip-rule="evenodd"
        />
    </svg>
</template>
