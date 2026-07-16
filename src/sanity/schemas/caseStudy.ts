import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study (Project)',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Project ID',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The unique ID used in URLs (e.g. tcmg, tebyanalqima)'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Arabic', value: 'ar' },
        ],
      },
      initialValue: 'en',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'results',
      title: 'Results Summary',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'A list of key results (e.g. "300% traffic increase")',
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'language',
    },
  },
})
