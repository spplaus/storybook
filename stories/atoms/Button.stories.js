import React from 'react'
import { Button } from '../../components/atoms/Button/Button'

export default {
    title: 'atoms/Button',
    component: Button,
}

const Template = (args) => <Button {...args}></Button>
export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
    primary: true,
    label: 'Buscar',
    onClick: () => {
        alert('Primary Button')
    },
}
Secondary.args = {
    primary: false,
    label: 'Buscar',
    onClick: () => {
        alert('Secondary Button')
    },
}
