import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'MountainMenDB',

  projectId: 'nwwws2wk',
  dataset: 'production',
  basePath: '/productStore',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
