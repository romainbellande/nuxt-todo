<script setup lang="ts">
import { object, string } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { FormField } from '~/components/ui/form';
import FormItem from '~/components/ui/form/FormItem.vue';
import FormLabel from '~/components/ui/form/FormLabel.vue';
import FormControl from '~/components/ui/form/FormControl.vue';
import Input from '~/components/ui/input/Input.vue';
import FormInput from '~/components/custom/form/FormInput.vue';

const validationSchema = toTypedSchema(object({
    email: string().email(),
    password: string().min(8),
    firstname: string().min(1),
    lastname: string().min(1)
}))

definePageMeta({
    layout: 'portal'
})

const { handleSubmit } = useForm({
    validationSchema
})

const register = handleSubmit(async (values) => {
    await $fetch('/api/register', {
        method: 'POST',
        body: values
    })
})
</script>

<template>
    <form novalidate @submit.prevent="register">
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="firstname" label="Firstname" />
        <FormInput name="lastname" label="Lastname" />
        <FormInput name="password" label="Password" type="password" />
        <button type="submit">Submit</button>
    </form>
</template>