import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const RoundedButton = styled(Button)(({ theme }) => ({
  borderRadius: 28,
  color: theme.palette.secondary.darkBlue,
  border: `2px solid ${theme.palette.primary.grey}`,
  height: 36,
  padding: '0 16px',
  textTransform: 'none',
  '&:hover': {
    background: '#ebe5ff',
    borderColor: theme.palette.primary.purple,
  },
}));
