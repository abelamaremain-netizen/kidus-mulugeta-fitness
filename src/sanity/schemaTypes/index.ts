import { type SchemaTypeDefinition } from 'sanity'
import  about  from './about'
import  contact  from './contact'
import  service  from './service'
import  hero  from './hero'
import  testimonial  from './testimonial'
import  competition  from './competition'
import  accomplishment  from './accomplishment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, contact, service, hero, testimonial, competition, accomplishment],
}
