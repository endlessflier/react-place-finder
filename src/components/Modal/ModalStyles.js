import { makeStyles } from '@mui/styles';

export const useModalStyles = makeStyles((theme) => ({
  modalContainer: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.grayBlue,
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    outline: 'none',
  },
  modalWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(3px)',
  },
  modalTitle: {
    position: 'relative',
    fontSize: '20px',
    color: theme.palette.secondary.darkBlue,
    padding: '48px 40px 20px 48px',
    lineHeight: '32px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  modalTitleText: {
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '133.4%',
  },
  modalContent: {
    overflowY: 'auto',
  },
  modalActions: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    gap: '16px',
  },
  closeButton: {
    position: 'absolute !important',
    right: '-40px',
    top: '16px',
    width: '36px',
    height: '36px',
    color: `${theme.palette.secondary.darkBlue}`,
    '&:hover': {
      color: `${theme.palette.secondary.grayBlue}`,
    },
  },
  backDrop: {
    backgroundColor: 'rgba(12, 26, 66, 0.6) !important',
  },
}));
