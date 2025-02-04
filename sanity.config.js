import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes/schema'

export default defineConfig({
  name: 'iss-studio',
  title: 'ISS Club CMS',
  projectId: 'uiggghbd',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
