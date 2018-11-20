import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  // row: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const ImageAvatars = (props) => {
  console.log('PROPS IN IMAGE AVATARS: ', props)
  const { classes } = props;
  
  return (
    // <div className={classes.row}>
    //   <Avatar alt="Remy Sharp" src="https://api.adorable.io/avatars/125/sarah.png" className={classes.avatar} />
    <div className={classes.row}>
      <Avatar
        src={props.avatarURL}
        alt={`Avatar of ${props.name}`}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);