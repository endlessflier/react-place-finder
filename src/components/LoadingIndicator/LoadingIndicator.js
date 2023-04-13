import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const loadingImg = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const useStyles = makeStyles({
  spinner: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.6)',
    zIndex: 9999,
  },
});

const LoadingIndicator = ({ fullScreen, width }) => {
  const styles = useStyles();

  return (
    <div
      data-testid="loading-indicator"
      className={styles.spinner}
      style={{ height: fullScreen ? '100vh' : '100%' }}
    >
      <img width={width} src={loadingImg} alt="Loading..." />
    </div>
  );
};

LoadingIndicator.propTypes = {
  fullScreen: PropTypes.bool,
  width: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  fullScreen: false,
  width: null,
};

export default LoadingIndicator;
