import styled from 'styled-components';

export const ButtonFeedback = styled.button`
  display: block;
  margin-right: ${p => p.theme.sizes.m};
  margin-left: auto;
  padding: 15px;
  min-width: ${p => p.theme.sizes.xxl};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.textPrimary};
  
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
`;
