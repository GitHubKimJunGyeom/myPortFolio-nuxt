import { defineCollection, z } from '@nuxt/content'
export const collections = {
  careers: defineCollection({
    type: 'data',
    source: 'careers.json',
    schema: z.object({
      career: z.array(
        z.object({
          name: z.string().nonempty(),
        }),
      ),
    }),
  }),
  projects: defineCollection({
    type: 'data',
    source: 'projects.json',
    schema: z.object({
      project: z.array(
        z.object({
          name: z.string().nonempty(),
        }),
      ),
    }),
  }),
  eightbit_ja: defineCollection({
    type: 'page',
    source: 'careers/ja/eightbit.md',
    schema: z.object({})
  }),
  eightbit_ko: defineCollection({
    type: 'page',
    source: 'careers/ko/eightbit.md',
    schema: z.object({})
  }),
  digitalshift_ja: defineCollection({
    type: 'page',
    source: 'careers/ja/digitalshift.md',
    schema: z.object({})
  }),
  digitalshift_ko: defineCollection({
    type: 'page',
    source: 'careers/ko/digitalshift.md',
    schema: z.object({})
  }),
  useful_ja: defineCollection({
    type: 'page',
    source: 'careers/ja/useful.md',
    schema: z.object({})
  }),
  useful_ko: defineCollection({
    type: 'page',
    source: 'careers/ko/useful.md',
    schema: z.object({})
  })
}
