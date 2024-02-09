import dotenv from 'dotenv';
import path from 'path';
import payload from 'payload';
import type { InitOptions } from 'payload/config'; // LEARNINGS : if you just need type of the following methods/options make sure to explicitely mention as type while importing.

dotenv.config({
    path: path.resolve(__dirname, '../.env') // LEARNINGS : this will first get the location of env file and resolve it in the dotenv config 
})

declare global { // LEARNINGS : The declare keyword in TypeScript is used to make types or variables available for type checking without providing an implementation, typically in declaration files.
    var payload: any;
} // LEARNINGS : you can either follow 'declare' approach or use global as any method to get away from typescript type safety.


let cached = (global as any).payload;
{/* LEARNINGS :  payload is defined as a property of the global object, which means it's in the global scope. It can be accessed and modified from any part of the code.  */ }
// global scope : Variables defined in the global scope are accessible from any part of the code. In a web browser, the global scope is the window object. In Node.js, the global scope is the global object.

// in simple words global in nodejs is like the cookies in the web browser

if (!cached) {
    cached = {
        client: null,
        promise: null
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD secret is missing in .env ');
    }

    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET!,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cached.client = await cached.promise;
    } catch (err: unknown) {
        cached.promise = null;
        throw err;
    }

    return cached.client;
}