<script setup lang="ts">
  import type { HTMLAttributes } from 'vue'
  import type { PostLoginResponse } from '@/types/auth'
  import IconGoogle from '@/icons/IconGoogle.vue'
  import { cn } from '@/lib/utils'
  import { Button } from '@/components/ui/button'
  import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldSeparator,
  } from '@/components/ui/field'
  import { Input } from '@/components/ui/input'
  import { data } from './data'
  import { useForm } from 'vee-validate'
  import { loginSchema } from '@/validation/login'
  import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
  import { RouterLink, useRouter } from 'vue-router'
  import { usePostLogin } from '@/hooks/usePostLogin'
  import { Loader2Icon } from 'lucide-vue-next'
  import { toast } from 'vue-sonner'
  import { HttpStatusCode } from 'axios'
  import Cookies from 'js-cookie'
  import { useAuthStore } from '@/stores/auth'

  // state
  const router = useRouter()
  const { mutateAsync, isPending } = usePostLogin()
  const { setUser } = useAuthStore()
  const props = defineProps<{
    class?: HTMLAttributes['class']
  }>()

  // init form
  const form = useForm({
    validationSchema: loginSchema,
    initialValues: {
      email: undefined,
      password: undefined,
    },
  })

  // methods
  const handleSubmit = form.handleSubmit(async (values) => {
    try {
      const results = await mutateAsync(values)
      if (results.status == HttpStatusCode.Ok) {
        Cookies.set('token', results.data?.token || '')
        setUser(results.data?.user || undefined)
        toast.success(results.message, { action: { label: 'close' } })
        router.push('/')
      } else {
        toast.error(results.message, { action: { label: 'close' } })
      }
    } catch (err: unknown) {
      const error = err as PostLoginResponse
      toast.error(error.message, { action: { label: 'close' } })
    }
  })
</script>

<template>
  <form :class="cn('flex flex-col gap-6', props.class)">
    <FieldGroup>
      <div class="form-header">
        <h1 class="title">{{ data.title }}</h1>
        <p class="description">{{ data.description }}</p>
      </div>
      <form @submit="handleSubmit" class="space-y-4">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel class="font-medium">Email</FormLabel>
            <FormControl>
              <Input
                class="font-medium"
                id="email"
                type="email"
                placeholder="mymail@example.com"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage class="font-medium" />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel class="font-medium">Password</FormLabel>
            <FormControl>
              <Input
                class="font-medium"
                id="password"
                type="password"
                placeholder="•••••••••••••"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage class="font-medium" />
          </FormItem>
        </FormField>
        <Button v-if="isPending" type="button" class="font-semibold w-full">
          <Loader2Icon class="animate-spin" />
        </Button>
        <Button v-else type="submit" class="font-semibold w-full">LOGIN </Button>
      </form>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Field>
        <Button variant="outline" type="button"> <IconGoogle />Login with Google </Button>
        <FieldDescription class="text-center">
          No have an account?
          <RouterLink to="/register">Sign up</RouterLink> or
          <RouterLink to="/">Back to home</RouterLink>
        </FieldDescription>
      </Field>
    </FieldGroup>
  </form>
</template>

<style scoped>
  @import '../../assets/main.css';

  .form-header {
    @apply flex flex-col items-center lg:items-start gap-1 text-center lg:text-start;
  }

  .title {
    @apply text-2xl font-bold;
  }

  .description {
    @apply text-muted-foreground text-sm text-balance font-medium;
  }
</style>
