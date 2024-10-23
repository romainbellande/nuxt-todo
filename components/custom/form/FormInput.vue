<script setup lang="ts">
const props = withDefaults(defineProps<{
    name: string,
    label: string,
    type?: string
}>(), { type: 'text' })
</script>

<template>
    <FormField v-slot="{ componentField }" :name="props.name">
        <FormItem>
            <FormLabel>{{ props.label }}</FormLabel>
            <FormControl>
                <Input :type="props.type" v-bind="componentField" />
            </FormControl>
        </FormItem>
    </FormField>
</template>