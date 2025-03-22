import { defineCollection, z } from '@nuxt/content'

const commonProjectSchema = z.object({
  title: z.string().nonempty(),
  date: z.string().nonempty(),
  isindividual: z.string().nonempty(),
  description: z.string().nonempty(),
  sub_description: z.array(z.string().nonempty()), 
  tags: z.array(z.string().nonempty()),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  url: z.string().nonempty(),
})


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
  }),


  introduction_ko: defineCollection({
    type: 'page',
    source: 'projects/ko/introduction.md',
    schema: commonProjectSchema
  }),
  introduction_ja: defineCollection({
    type: 'page',
    source: 'projects/ja/introduction.md',
    schema: commonProjectSchema
  })
}
