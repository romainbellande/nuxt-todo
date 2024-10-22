<script setup lang="ts">
import type { NuxtLinkProps } from '#app';

const props = defineProps<NuxtLinkProps>()
</script>

<template>
    <NuxtLink :to="props.to" class="space-x-4 flex items-center px-4 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-full gap-3 rounded-lg font-normal bg-muted justify-center lg:justify-start">
        <slot name="icon" />
        <span class="hidden lg:inline-block">
            <slot />
        </span>
    </NuxtLink>
</template>