import React from 'react'

import { HeaderBoxIcon } from '../../components/molecules/Header/HeaderBox'

export default {
    title: 'Molecules/HeaderBoxIcon',
    component: HeaderBoxIcon,
}

const Template = (args) => <HeaderBoxIcon {...args} />

export const HeaderIcon = Template.bind({})

HeaderIcon.args = {
    label: 'Titular',
    text: 'Santiago Pascual Plaus',
    size: 'xlarge',
    type: 'user-circle-solid-brand',
}
