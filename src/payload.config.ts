import { buildConfig } from "payload/config";
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/sell'
    },
    admin: {
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