import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
    },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: 'username',
        password: 'password',
        error: 'error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        isLoading: true,
    },
})];
