<template>
    <div class="relative border-b px-3 py-2 text-center w-20 lg:w-64 h-14">
        <div class="flex items-center gap-3 justify-center lg:justify-start h-full">
            <span class="hidden text-xl font-semibold lg:inline-block">Dashboard</span>
        </div>
        <button type="button" class="items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground absolute top-4 hidden size-6 rounded-full p-0 -right-3 lg:inline-flex">
            <LucideChevronLeft :size="16" />
        </button>
    </div>
</template>