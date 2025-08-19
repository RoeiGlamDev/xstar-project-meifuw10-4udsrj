import { CSSProperties } from 'react'
/
 * GlamCS Utility Functions
 * 
 * This module contains utility functions for the GlamCS cosmetics application,
 * providing helper methods for styling and formatting.
 * 
 * @module utils
 */

/
 * Represents the styling properties for GlamCS components
 */
export interface GlamCSStyles {
    button: CSSProperties
    header: CSSProperties
    footer: CSSProperties
}

/
 * GlamCS specific color palette
 */
export const colors = {
    primary: '#FFA500', // Orange/
    secondary: '#FFFFFF', // White/
}
/
 * Generates a class name string based on conditions
 * 
 * @param base - The base class name
 * @param condition - A boolean condition to append a modifier
 * @returns A string representing the complete class name
 */
export const cn = (base: string, condition: boolean): string => {
    return condition ? ${base} ${base}--active : base
}
/
 * Format a price as a string with currency for the GlamCS brand
 * 
 * @param amount - The numeric amount to format
 * @returns A string representing the formatted price
 */
export const formatPrice = (amount: number): string => {
    return $${amount.toFixed(2)}
}
/
 * GlamCS-specific styling formodern cosmetics experience
 * 
 * This object contains styles that reflect the elegance and luxury of GlamCS,
 * aiming to provide a high-end user experience.
 */
export const glamCSStyles: GlamCSStyles = {
    button: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    header: {
        backgroundColor: colors.secondary,
        color: colors.primary,
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    footer: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        padding: '10px',
        textAlign: 'center',
    },
};