import { createClient } from '@sanity/client'
import groq from 'groq'

const projectId = 'cb33t7o0'
const dataset = 'production'
const apiVersion = '2023-06-25'
const useCdn = true

class SeerealCMSReader {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn
  })

  req(query) {
    return this.client.fetch(groq`${query}`)
  }
}

const clientInst = new SeerealCMSReader()

export default clientInst
