import { Typography } from '@mui/material';

export const TypographyWithIcon = ({ text, startIcon, endIcon, ...props }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
      {...props}
    >
      {startIcon}
      {text}
      {endIcon}
    </Typography>
  );
};
