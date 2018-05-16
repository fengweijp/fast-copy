/**
 * @constant {boolean} HAS_PROPERTY_SYMBOL_SUPPORT
 */
export const HAS_PROPERTY_SYMBOL_SUPPORT = typeof global.Object.getOwnPropertySymbols === 'function';

/**
 * @constant {boolean} HAS_WEAKSET_SUPPORT
 */
export const HAS_WEAKSET_SUPPORT = typeof global.WeakSet === 'function';
