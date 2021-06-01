import React from 'react'
import { NotificationBox } from '../../components/atoms/Notification-Box/NotificationBox'

export default {
    title: 'atoms/Notification-Box',
    component: NotificationBox,
}

const Template = (args) => <NotificationBox {...args}></NotificationBox>
export const NotificationBoxs = Template.bind({})

NotificationBoxs.args = {
    label: 'Total a pagar',
    text: '$11064.94',
    typeBorder: 'warning',
    labelType: 'warning',
    weight: 'regular',
}
