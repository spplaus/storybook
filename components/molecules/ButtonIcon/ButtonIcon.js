import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../atoms/Button/Button'
import { Icon } from '../../atoms/Icon/Icon'

export const ButtonIcon = (args) => (
    <Button {...args}>
        <Icon icons={args.icons} size={args.size}></Icon>
    </Button>
)

ButtonIcon.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icons: PropTypes.oneOf([
        'search-solid-white',
        'cart-plus-solid-white',
        'arrow-left-solid-white',
    ]),
}

ButtonIcon.defaultProps = {
    size: 'small',
    icons: 'search-solid-white',
}
