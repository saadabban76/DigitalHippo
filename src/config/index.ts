export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: "ui_kits" as const,
        features: [
            {
                name: 'Editor Picks',
                href: 'Shop now',
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'New Arrivals',
                href: 'Shop now',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'BestSellers',
                href: 'Shop now',
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
                href: 'Shop now',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: 'Shop now',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'BestSellers',
                href: 'Shop now',
                imageSrc: '/nav/icons/bestsellers.jpg',
            }
        ]
    },
]