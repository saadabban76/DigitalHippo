import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    access: {
        read: () => true, // Anyone can view the list of users.
        create: () => true,
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            required: true,
            admin: {
                condition: () => false, // this  field is not visible in the admin UI
            },
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ]
        }
    ]
}