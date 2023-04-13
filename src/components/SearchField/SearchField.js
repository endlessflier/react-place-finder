import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    borderRadius: '58px',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    border: `2px solid ${theme.palette.primary.grey}`,
    height: 36,
    padding: '0 36px 0 16px',
    textTransform: 'none',
    '&:hover': {
      borderColor: theme.palette.primary.purple,
    },
    '&:before': {
      borderBottom: 'none !important',
    },
    '&:after': {
      borderBottom: 'none !important',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: theme.palette.primary.purple,
    },
  },
  textFieldBaseInput: {
    fontFamily: 'Open Sans !important',
    fontSize: '16px !important',
    fontWeight: '400 !important',
    lineHeight: '150% !important',
    letterSpacing: '0.15px !important',
    color: `${theme.palette.secondary.darkBlue} !important`,
  },
  textFieldInputFocus: {
    borderColor: theme.palette.primary.purple,
  },
  dateTimeHelperText: {
    fontFamily: 'Open Sans !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    lineHeight: '19px !important',
    color: `${theme.palette.secondary.darkBlue} !important`,
    transform: 'none !important',
  },
  noBorder: {
    border: 'none !important',
  },
  searchField: {
    position: 'absolute',
    right: '4px',
    marginTop: '-1px',
    color: `${theme.palette.secondary.darkBlue} !important`,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export function SearchField({ value, onChange, onCancel, ...props }) {
  const styles = useStyles();

  return (
    <TextField
      {...props}
      variant="standard"
      value={value}
      onChange={onChange}
      InputProps={{
        classes: {
          root: styles.inputRoot,
          input: styles.textFieldBaseInput,
          focused: styles.textFieldInputFocus,
          notchedOutline: styles.noBorder,
        },

        endAdornment: (
          <InputAdornment
            position="start"
            classes={{
              root: styles.searchField,
            }}
          >
            {value ? (
              <ClearRoundedIcon onClick={onCancel} id="clear_search_field" />
            ) : (
              <SearchOutlinedIcon />
            )}
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        classes: {
          root: styles.textFieldLabel,
        },
      }}
      FormHelperTextProps={{
        classes: { root: styles.dateTimeHelperText },
      }}
    />
  );
}
