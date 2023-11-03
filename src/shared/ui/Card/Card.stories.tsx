import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Card } from './Card';

export default {
    title: 'entities/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="test" text="text text" />,
};
