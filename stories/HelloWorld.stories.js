import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import HelloWorld from 'src/components/HelloWorld';

const stories = storiesOf('HelloWorld', module)
  .add('HelloWorld', () =>
    <HelloWorld
      title={text('Title', 'This is a title')}
      description={text('Description', 'This is a description')}
      showDescription={boolean('Show Description', true)}/>
  );

stories.addDecorator(withKnobs);
