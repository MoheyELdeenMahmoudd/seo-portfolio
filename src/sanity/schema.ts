import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { caseStudy } from './schemas/caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, caseStudy],
}
