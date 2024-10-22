<script setup lang="ts">
import Sidebar from '~/components/layout/Sidebar.vue'
import Header from '~/components/layout/Header.vue'
</script>

<template>
    <div class="grid w-full transition-width duration-300 min-h-dvh pl-0 lg:pl-64 sm:pl-20" >
        <Sidebar />
        <div class="flex flex-col">
            <Header />
            <main class="bg-muted dark:bg-muted/20 flex-1 p-4 lg:p-6">
                <slot />
            </main>
        </div>
    </div>
</template>