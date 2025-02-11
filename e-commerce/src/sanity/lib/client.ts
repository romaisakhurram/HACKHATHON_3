import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId : "us8yimp7",
  dataset : "production",
  apiVersion : "2024-01-01",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
