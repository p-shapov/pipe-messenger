import { makeStyles } from '@material-ui/core/styles';

const appStyles = makeStyles({
  app: {
    position: 'fixed',
    right: 0,
    top: 0,
    width: `${process.env.REACT_APP_EXTENSION_WIDTH}px`,
    height: '100%',
    overflow: 'scroll',
  },
});

export { appStyles };
