import { defineCollection, z } from '@nuxt/content'
export const collections = {
  career_list: defineCollection({
    type: 'data',
    source: 'career_list.json',
    schema: z.object({
      career: z.array(
        z.object({
          name: z.string().nonempty(),
        }),
      ),
    }),
  }),
  eightbit_ja: defineCollection({
    type: 'page',
    source: 'ja/eightbit.md',
    schema: z.object({})
  }),
  eightbit_ko: defineCollection({
    type: 'page',
    source: 'ko/eightbit.md',
    schema: z.object({})

  }),
  digitalshift_ja: defineCollection({
    type: 'page',
    source: 'ja/digitalshift.md',
    schema: z.object({})

  }),
  digitalshift_ko: defineCollection({
    type: 'page',
    source: 'ko/digitalshift.md',
    schema: z.object({})

  }),
  useful_ja: defineCollection({
    type: 'page',
    source: 'ja/useful.md',
    schema: z.object({})

  }),
  useful_ko: defineCollection({
    type: 'page',
    source: 'ko/useful.md',
    schema: z.object({})

  })
}
