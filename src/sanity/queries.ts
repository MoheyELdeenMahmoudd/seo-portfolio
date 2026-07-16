import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export const caseStudiesQuery = groq`*[_type == "caseStudy" && defined(id)] | order(_createdAt desc)`

export const caseStudyByIdQuery = groq`*[_type == "caseStudy" && id == $id][0]`
