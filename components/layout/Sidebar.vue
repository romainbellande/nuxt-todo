<script setup lang="ts">
import SidebarHeader from './SidebarHeader.vue';
import SidebarNavItem from './SidebarNavItem.vue';
</script>

<template>
    <aside class="inset-y fixed left-0 z-20 hidden h-full flex-col items-center border-r bg-background transition-width duration-300 sm:flex w-20 lg:w-64">
        <SidebarHeader />
        <nav class="py-4 space-y-4 w-full px-2">
            <SidebarNavItem to="/">
                <template #icon>
                    <LucideFolders :size="20"/>
                </template>
                my projects
            </SidebarNavItem>
        </nav>
    </aside>
</template>