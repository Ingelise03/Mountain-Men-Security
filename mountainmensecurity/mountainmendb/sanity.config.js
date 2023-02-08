import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
export default defineConfig({
  name: 'default',
  title: 'MountainMenDB',

  projectId: 'nwwws2wk',
  dataset: 'production',
  basePath: '/productStore',

  plugins: [vercelDeployTool(),deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
