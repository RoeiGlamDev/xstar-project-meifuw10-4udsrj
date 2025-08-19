import { Product } from './product';/
import { User } from './user';/

/
 * Represents a makeup collection for GlamCS cosmetics brand.
 * @interface MakeupCollection
 */
export interface MakeupCollection {
    id: string; // Unique identifier for the collection/
    name: string; // Name of the makeup collection/
    description: string; // Description of the collection highlighting luxurious features/
    products: Product[]; // Array of products included in the collection/
    launchDate: Date; // Date the collection was launched/
    isLimitedEdition: boolean; // Flag to indicate if the collection is limited edition/
}

/
 * Represents a review for a GlamCS product.
 * @interface ProductReview
 */
export interface ProductReview {
    id: string; // Unique identifier for the review/
    productId: string; // Identifier for the product being reviewed/
    userId: string; // Identifier for the user who wrote the review/
    rating: number; // Rating given by the user (1 to 5 scale)/
    comment: string; // User's comment about the product/
    createdAt: Date; // Date the review was created/
}

/
 * Represents a shopping cart for GlamCS users.
 * @interface ShoppingCart
 */
export interface ShoppingCart {
    userId: string; // Identifier for the user/
    items: CartItem[]; // Array of items in the shopping cart/
    totalAmount: number; // Total cost of the items in the cart/
}

/
 * Represents an item in a shopping cart.
 * @interface CartItem
 */
export interface CartItem {
    product: Product; // Product details for the cart item/
    quantity: number; // Quantity of the product in the cart/
}

/
 * Represents a makeup artist profile for GlamCS.
 * @interface MakeupArtist
 */
export interface MakeupArtist {
    id: string; // Unique identifier for the artist/
    name: string; // Name of the makeup artist/
    bio: string; // Short biography of the artist/
    portfolio: string[]; // Array of URLs to portfolio images/
    socialMediaLinks: SocialMediaLinks; // Links to social media profiles/
}

/
 * Represents social media links for a GlamCS makeup artist.
 * @interface SocialMediaLinks
 */
export interface SocialMediaLinks {
    instagram?: string; // Instagram profile link/
    facebook?: string; // Facebook profile link/
    twitter?: string; // Twitter profile link/
}

/
 * Represents a user profile in the GlamCS ecosystem.
 * @interface GlamCSUser
 * @extends User
 */
export interface GlamCSUser extends User {
    favoriteProducts: Product[]; // Array of user's favorite products/
    purchaseHistory: Product[]; // Array of products purchased by the user/
}

/
 * Exports the defined types and interfaces for GlamCS cosmetics application.
 */
export {
    MakeupCollection,
    ProductReview,
    ShoppingCart,
    CartItem,
    MakeupArtist,
    SocialMediaLinks,
    GlamCSUser
};