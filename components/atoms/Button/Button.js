import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import classNames from 'classnames'

export const Button = ({ primary, size, label, children, ...props }) => {
    const mode = primary ? 'type--primary' : 'type--secondary'
    return (
        <button
            type="button"
            className={classNames('button', {
                [`size--${size}`]: size,
                [mode]: mode,
            })}
            {...props}
        >
            {label}
            {children}
        </button>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,

    children: PropTypes.node,
}

Button.defaultProps = {
    primary: true,
    size: 'small',
    onClick: undefined,
    label: 'Button',
}
