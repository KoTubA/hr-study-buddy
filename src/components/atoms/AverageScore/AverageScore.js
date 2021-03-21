import React from 'react';
import { StyledAverageScore } from './AverageScore.styles';

export const AverageScore = ({ average }) => (
  <StyledAverageScore value={average}>{average}</StyledAverageScore>
);
