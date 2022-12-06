import styled from 'styled-components';
 

export const Number = styled.span`
  display: block;
  margin-left: ${p => p.theme.sizes.l};
  font-weight: bold;
`;

export const StatisticLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberTotal = styled.span`
  display: inline-block;
 
  text-align: center;
 
  font-weight: bold;
`;

export const TextTotal = styled.p`
  text-align: center;
  margin-right: ${p => p.theme.sizes.l};
  margin-left: 0;
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

export const TextPositiveFeedback = styled.p`
  text-align: center;
  margin-right: ${p => p.theme.sizes.l};
  margin-left: 0;
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
