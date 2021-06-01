import React from 'react'
import { Icon } from '../../components/atoms/Icon/Icon'

export default {
    title: 'atoms/Icon',
    component: Icon,
}

const Template = (args) => <Icon {...args} />

export const Icons = Template.bind({})

Icons.args = {
    size: 'xlarge',
    icons: 'search-solid',
}
