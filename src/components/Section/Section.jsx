import PropTypes from 'prop-types';
import { Box } from 'components/Box';
 

export const Section = ({ title, children }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    as="section"
    flexDirection="column"
    alignItems="center"
   
  >
    <h2>{title}</h2>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
