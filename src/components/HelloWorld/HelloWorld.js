import React from 'react';
import PropTypes from 'prop-types';
import {renderIf} from '../../utils/render';

const HelloWorld = ({title, description, showDescription}) => {
  return (
    <div>
      <p className='title'>{title}</p>
      {renderIf(showDescription, <p className='description'>{description}</p>)}
    </div>
  );
};

HelloWorld.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showDescription: PropTypes.bool
};

HelloWorld.defaultProps = {
  title: 'Hello World!',
  description: 'This is an awesome boilerplate',
};

export default HelloWorld;