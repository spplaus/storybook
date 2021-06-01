import React from 'react'

import { ButtonIcon } from '../../components/molecules/ButtonIcon/ButtonIcon.js'

export default {
    title: 'Molecules/ButtonIcon',
    component: ButtonIcon,
}

const Template = (args) => <ButtonIcon {...args} />

export const ButtonWithIcon = Template.bind({})

ButtonWithIcon.args = {
    label: 'Buscar',
    size: 'small',
    icons: 'search-solid-white',
}
