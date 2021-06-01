module.exports = {
    stories: [
        '../{tokens,atoms,molecules,layout}/**/*.stories.@(js|mdx)',
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
