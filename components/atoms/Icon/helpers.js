const ICONS_ASSETS_PATH = '/icons/'

const iconMap = {
    'search-solid': 'search-solid',
    'search-solid-white': 'search-solid-white',
    'cart-plus-solid': 'cart-plus-solid',
    'cart-plus-solid-white': 'cart-plus-solid-white',
    'arrow-left-solid': 'arrow-left-solid',
    'arrow-left-solid-white': 'arrow-left-solid-white',
    'user-circle-solid-brand': 'user-circle-solid-brand',
    'user-circle-solid': 'user-circle-solid',
    direction: 'direction',
}

export const mapType = (icons) => `${ICONS_ASSETS_PATH}${iconMap[icons]}.svg`
