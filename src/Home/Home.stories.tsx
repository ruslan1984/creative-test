import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Home from '@home/Home';


export default {
  component: List,
  title: 'Home',
  excludeStories: /.*Data$/ //,
  // decorators: [ withKnobs ]
};

export const taskData = {
  id: '2',
  title: 'Home',
  state: 'Home',
  updatedAt: new Date( 2018, 0, 1, 9, 0 ),
};

export const Default = () => <Home />;
