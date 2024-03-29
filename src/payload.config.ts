import { buildConfig } from "payload/config";
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from "path";
import { Users } from "./app/collections/Users";
import dotenv from 'dotenv'

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users],
    routes: {
        admin: '/sell'
    },
    admin: {
        user: 'users',
        bundler: webpackBundler(),
        // LEARNINGS : the webpackBundler function is used to configure the bundler for the admin panel. This bundler is responsible for bundling the JavaScript and CSS files for the admin panel.
        
        meta: {
            titleSuffix: "- DigitalHippo",
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg'
        }
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.DB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    }
})