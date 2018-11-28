import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  // root: {
  //   display: 'flex',
  // },
  formControl: {
    margin: theme.spacing.unit * 1,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class PollForm extends Component {
  state = {
    value: null ,
  };

  handleChange = event => {
    const value = event.target.value
    this.setState(() => ({ value }));
  };

  render() {
    // console.log('State in POLLFORM:', this.state)
    // console.log('Props in POLLFORM:', this.props)
    const { classes, optionOneText, optionTwoText, question } = this.props;

    return (
      <div className={classes.root}>
      <h4>Would You Rather?</h4>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Would You Rather"
            name="poll"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="optionOne" control={<Radio />} label={optionOneText} />
            <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwoText} />
           
          </RadioGroup>
          <button disabled={!this.state}>Vote</button>
        </FormControl>
        
      </div>
    );
  }
}

export default withStyles(styles)(PollForm);