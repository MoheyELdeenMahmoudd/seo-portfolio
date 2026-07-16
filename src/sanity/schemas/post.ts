import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title (Internal)',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Used for SEO and internal dashboard reference.'
    }),
    defineField({
      name: 'h1',
      title: 'Main Heading (H1)',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'The main visible heading on the blog post page.'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text (CTA)',
      type: 'string',
      initialValue: 'احصل على استشارة قانونية الآن',
      description: 'The text that appears on the button under the H1.'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'url',
      description: 'The link where the button points to (e.g. WhatsApp or Contact page).',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
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
