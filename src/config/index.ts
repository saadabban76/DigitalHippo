export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: "ui_kits" as const,
        features: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'BestSellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg',
            }
        ]
    },
    {
        label: 'icons',
        value: "icons" as const,
        features: [
            {
                name: 'Favorite Icon Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'BestSellers',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg',
            }
        ]
    },
]