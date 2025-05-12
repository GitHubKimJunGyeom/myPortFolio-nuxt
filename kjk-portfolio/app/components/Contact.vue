<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '#ui/types'
const { t } = useI18n()
const toast = useToast()

const state = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  content: '',
})

const schema = z.object({
  name: z.string().nonempty(t('contact.validate.name')),
  email: z.string().email(t('contact.validate.email')),
  phone: z.string().nonempty(t('contact.validate.phone')),
  subject: z.string().nonempty(t('contact.validate.subject')),
  content: z.string().nonempty(t('contact.validate.content'))
})
type Schema = z.output<typeof schema>

const loading = ref(false)
const isSendEnabled = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  try {
    await $fetch('/api/sendMail', {
      method: 'POST',
      body: event.data,
    })
    state.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      content: ''
    };
    isSendEnabled.value = false;
    toast.add({
      title: t('contact.success.title'),
      description: t('contact.success.message'),
      color: 'success',
    });
  }
  catch {
    toast.add({
      title: t('contact.error.title'),
      description: t('contact.error.message'),
      color: 'error'
    });
  }
  loading.value = false
}

// 입력값이 바뀔 때마다 검증
watch(
  state,
  () => {
    try {
      schema.parse(state.value);
      isSendEnabled.value = true;
    } catch {
      isSendEnabled.value = false;
    }
  },
  { deep: true }
)
</script>

<template>
  <div id="contact" class="w-full text-center">
    <div class="flex items-center justify-center w-screen pt-7 pb-6">
      <a href="#contact">
        <img src="/static/assets/img/svg/link-variant.svg" class="pb-6 w-[64px] h-[64px]">
      </a>
      <h2 class="font-black text-black text-2xl lg:text-6xl pb-6 border-b"> {{ $t('contact.title') }} </h2>
    </div>
  </div>
  <section class="mx-auto flex max-w-4xl flex-col p-7">
    <div class="flex flex-col sm:items-center sm:justify-between">
      <UForm
        :state
        :schema
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit="onSubmit"
      >
        <UFormField
          :label="$t('contact.name')"
          name="name"
          required
        >
          <UInput
            v-model="state.name"
            type="text"
            autocomplete="name"
            class="w-full"
            :placeholder="$t('contact.name_placeholder')"
          />
        </UFormField>

        <UFormField
          :label="$t('contact.email')"
          name="email"
          required
        >
          <UInput
            v-model="state.email"
            autocomplete="email"
            class="w-full"
            placeholder="readme@gmail.com"
          />
        </UFormField>

        <UFormField
          :label="$t('contact.phone')"
          name="phone"
        >
          <UInput
            v-model="state.phone"
            autocomplete="tel"
            class="w-full"
            :placeholder="$t('contact.phone_placeholder')"
          />
        </UFormField>

        <UFormField
          :label="$t('contact.subject')"
          name="subject"
          required
        >
          <UInput
            v-model="state.subject"
            class="w-full"
            :placeholder="$t('contact.subject_placeholder')"
          />
        </UFormField>

        <UFormField
          :label="$t('contact.content')"
          name="content"
          required
        >
          <UTextarea
            v-model="state.content"
            autoresize
            class="w-full"
            :rows="4"
            :placeholder="$t('contact.content_placeholder')"
          />
        </UFormField>
        <div class="flex justify-center">
          <UTooltip
            :disabled="isSendEnabled"
            :text="$t('contact.disabled')"
          >
            <UButton
              :loading
              :disabled="!isSendEnabled"
              type="submit"
              block
            >
              {{ $t("contact.submit") }}
            </UButton>
          </UTooltip>
        </div>
      </UForm>
    </div>
  </section>
</template>
