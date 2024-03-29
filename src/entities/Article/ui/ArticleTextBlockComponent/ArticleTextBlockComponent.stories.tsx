import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (
    args,
) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
