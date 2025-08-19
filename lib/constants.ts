export const BRAND_NAME = "GlamCS"
export const PRIMARY_COLOR = "#FFA500"; // Orange/
export const SECONDARY_COLOR = "#FFFFFF"; // White/

/
 * Configuration for GlamCS cosmetics application.
 * This file contains constants that define the brand identity
 * and styling details for the website.
 */

export interface GlamCSConfig {
    brandName: string
    primaryColor: string
    secondaryColor: string
    slogan: string
    contactEmail: string
    socialMediaLinks: string[]
}

/
 * GlamCS specific configuration details.
 */
export const glamCSConfig: GlamCSConfig = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    slogan: "Elevate Your Beauty with GlamCS",
    contactEmail: "support@glamcs.com",
    socialMediaLinks: [
        "https://www.instagram.com/glamcs",/
        "https://www.facebook.com/glamcs",/
        "https://twitter.com/glamcs"/
    ]
}
/
 * Cosmetics specific types and interfaces for GlamCS.
 */

export interface Product {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
}

/
 * Sample product list for GlamCS cosmetics.
 */
export const sampleProducts: Product[] = [
    {
        id: "1",
        name: "Luxury Lipstick",
        description: "Rich, creamy lipstick that glides on smoothly.",
        price: 29.99,
        imageUrl: "https://example.com/images/luxury-lipstick.jpg",/
        category: "Lip Care"
    },
    {
        id: "2",
        name: "Silk Foundation",
        description: "A flawless foundation for a natural glow.",
        price: 49.99,
        imageUrl: "https://example.com/images/silk-foundation.jpg",/
        category: "Face Makeup"
    },
    {
        id: "3",
        name: "Glamorous Eyeshadow Palette",
        description: "Versatile eyeshadow palette for any occasion.",
        price: 39.99,
        imageUrl: "https://example.com/images/eyeshadow-palette.jpg",/
        category: "Eye Makeup"
    }
];