import React from 'react'
import PropTypes from 'prop-types'

import { NotificationBox } from '../../atoms/Notification-Box/NotificationBox'
import { Icon } from '../../atoms/Icon/Icon'

export const HeaderBoxIcon = (args) => (
    <NotificationBox {...args}>
        <Icon icons={args.type} size={args.size}></Icon>
    </NotificationBox>
)

HeaderBoxIcon.propTypes = {
    type: PropTypes.oneOf(['user-circle-solid-brand']),
    size: PropTypes.oneOf(['xlarge']),
}

HeaderBoxIcon.defaultProps = {
    type: 'user-circle-solid-brand',
    size: 'xlarge',
    typeBorder: 'default',
    labelType: 'default',
    weight: 'semibold',
    labelWeight: 'regular',
}
