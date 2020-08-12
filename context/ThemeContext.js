import React from 'react';
import PropTypes from 'prop-types';

export const theme = {
  color: '#2573BC',
  blueSky: '#C8E2FF',
  blueSky2: '#ECF1FF',
  white: '#fff',
  green: '#58B713',
  grey: '#d9d9d9',
  grey2: '#717171',
  grey3: 'rgb(247, 247, 247)',
  grey4: 'rgb(76,76,75)',
  black: '#000',
  button: '#FA9B28',
  red: '#FF4747',
  orange: '#FA9B28',
  defaultBackground: "#F3F3F3"
};

export const ThemeContext = React.createContext(theme);

export const Theme = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
