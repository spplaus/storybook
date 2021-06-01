import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './NotificationBox.css'

export const NotificationBox = ({
    label,
    text,
    typeBorder,
    children,
    labelType,
    weight,
    labelWeight,
}) => {
    return (
        <div
            className={classNames('notification-box container', {
                [`border--${typeBorder}`]: typeBorder,
                [`label--${labelType}`]: labelType,
                [`p-weight--${weight}`]: weight,
            })}
        >
            <div>
                <label
                    className={classNames({
                        [`label--font-weight--${labelWeight}`]: labelWeight,
                    })}
                >
                    {label}
                </label>
                <p>{text}</p>
            </div>
            <div>{children}</div>
        </div>
    )
}

NotificationBox.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    typeBorder: PropTypes.oneOf(['warning', 'success', 'default']),
    labelType: PropTypes.oneOf(['warning', 'success', 'default']),
    weight: PropTypes.oneOf(['regular']),
    labelWeight: PropTypes.oneOf(['regular', 'semibold']),
    children: PropTypes.node,
}

NotificationBox.defaultProps = {
    label: 'Total a pagar',
    text: '$11064.94',
    typeBorder: 'warning',
    labelType: 'warning',
    weight: 'regular',
    labelWeight: 'regular',
}
