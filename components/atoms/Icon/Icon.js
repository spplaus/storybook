import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { mapType } from './helpers.js'
import './Icon.css'

export const Icon = ({ icons, size }) => (
    <div>
        <img
            src={mapType(icons)}
            alt={icons}
            className={classNames('button', {
                [`size--icon-${size}`]: size,
            })}
        ></img>
    </div>
)

Icon.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    icons: PropTypes.oneOf([
        'search-solid',
        'cart-plus-solid',
        'arrow-left-solid',
        'user-circle-solid-brand',
        'user-circle-solid',
    ]),
}

Icon.defaultProps = {
    size: 'xlarge',
}
