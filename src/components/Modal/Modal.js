import PropTypes from 'prop-types';
import cx from 'clsx';
import { noop } from 'lodash';

import { Modal as MUIModal, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import { useModalStyles } from './ModalStyles';

const StyledCloseIcon = styled(CloseIcon)({
  root: {
    color: '#081949',
    '&:hover': {
      color: 'white',
      cursor: 'pointer',
    },
  },
});

function Modal({
  title,
  children,
  actions,
  open,
  isCloseIconHidden,
  onClose,
  stickyFooter,
  containerClassName,
  contentClassName,
  titleClassName,
  ...otherProps
}) {
  const styles = useModalStyles();

  return (
    <MUIModal
      open={open}
      id="Modal_container_MUIModal"
      BackdropProps={{ classes: { root: styles.backDrop } }}
      className={styles.modalWrapper}
      onClose={onClose}
      {...otherProps}
    >
      <div className={cx(styles.modalContainer, containerClassName)}>
        {actions && (
          <div
            className={cx(
              !stickyFooter && styles.modalActions,
              stickyFooter && styles.modalActionsSticky,
            )}
          >
            {actions}
          </div>
        )}
        {title && (
          <div className={cx(styles.modalTitle, titleClassName)}>
            <div className={styles.modalTitleText}>{title}</div>{' '}
            {!isCloseIconHidden && (
              <Tooltip title="Close" placement="bottom" arrow>
                <IconButton
                  onClick={onClose}
                  classes={{ root: styles.closeButton }}
                  id="Modal_CloseIconButton"
                >
                  <StyledCloseIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        )}

        {children && <div className={cx(styles.modalContent, contentClassName)}>{children}</div>}
      </div>
    </MUIModal>
  );
}

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array]),
  stickyFooter: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  isCloseIconHidden: PropTypes.bool,
  containerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  children: null,
  actions: '',
  stickyFooter: false,
  onClose: noop,
  isCloseIconHidden: false,
  containerClassName: null,
  contentClassName: null,
  titleClassName: null,
};

export default Modal;
