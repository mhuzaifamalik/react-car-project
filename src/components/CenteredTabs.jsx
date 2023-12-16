import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import NativeSelect from '@mui/material/NativeSelect';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import Box from '@mui/material/Box';

import loclas from '../images/Group12.png'



const styling = {
  labelStyle: {
    color: '#000',
    background: '#fff',
    position: 'absolute',
    left: '25%',
    top: '17px',
    padding: '0 15px 0 15px',
    fontSize: '20px',
    fontFamily: 'Montserrat'
  },
  labelStyle15: {
    position: 'absolute',
    zIndex: '1',
    left: '50%',
    top: '-10px',
    transform: 'translateX(-50%)',
    background: '#fff',
    padding: '0 10px 0 10px',
    fontFamily: 'Montserrat',
    fontWeight: '500'
  },

  labelStyle1: {
    color: '#000',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    display: 'block',
    margin: '0-auto',
    padding: '10px 0 10px 0 '
  },

  selectStyle: {
    '& .MuiNativeSelect-select': {
      color: 'black',

      border: '1px solid black',
      width: '100%',
      height: '50px',
      padding: '0 10px 0 10px ',
      borderRadius: '5px',
      outline: 'none',
      fontSize: '16px',
      fontFamily: 'Montserrat',
      backgroundImage: loclas

    },
    '& .MuiSvgIcon-root ': {
      display: 'none',
      border: '1px solid black '

    },
    '&::before': {
      border: 'none'
    },
  },
  tabStyle: {
    border: '1px solid #000',
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    color: '#000',
    opacity: '1',
    margin: '0 10px',
    borderRadius: '15px',
    background: '#fff',
    '&.Mui-selected': {
      background: '#000',
      color: "#fff"
    }
  },
  inputStyle: {
    '&.MuiFormControl-root': {
      width: '100%!important',
      border: '1px solid #000',
      borderRadius: '10px'
    }
  },
  inputStyle1: {
    '&.MuiTabs-indicator': {
      display: 'none'

    }
  }


}

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  const { value, onIncrement, onDecrement, ...other } = props;
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
          onClick: onIncrement,
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
          onClick: onDecrement,
        },
      }}
      {...other}
      ref={ref}
    />
  );
});
function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel sx={{
        border: '1px solid black',
        display: 'flex',
        fontSize: '20px',
        borderRadius: '10px',
        justifyContent: 'space-evenly'
      }} label="Animal" style={{
        fontSize: '200px',
        color: '#000',
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }} control={<Checkbox style={{ color: 'black' }} />} />
    </FormGroup>
  );
}
function CheckboxLabels1() {
  return (
    <FormGroup>
      <FormControlLabel sx={{
        border: '1px solid black',
        display: 'flex',
        fontSize: '20px',
        borderRadius: '10px',
        justifyContent: 'space-evenly'
      }} label="Carseat" style={{
        fontSize: '200px',
        color: '#000',
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }} control={<Checkbox style={{ color: 'black' }} />} />
    </FormGroup>
  );
}
function CheckboxLabels2() {
  return (
    <FormGroup>
      <FormControlLabel sx={{
        border: '1px solid black',
        display: 'flex',
        fontSize: '20px',
        borderRadius: '10px',
        justifyContent: 'space-evenly'
      }} label="Meeting & Greeting" style={{
        fontSize: '200px',
        color: '#000',
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }} control={<Checkbox style={{ color: 'black' }} />} />
    </FormGroup>
  );
}
function CheckboxLabels3() {
  return (
    <FormGroup>
      <FormControlLabel sx={{
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-evenly',
        borderRadius: '10px',
        fontSize: '20px'
      }} label="Curbside" style={{
        fontSize: '200px',
        color: '#000',
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }} control={<Checkbox style={{ color: 'black' }} />} />
    </FormGroup>
  );
}
const DurationSelector = ({ selectedDuration, onDurationChange }) => {
  const durations = [15, 30, 45, 60]; 

  return (
    <FormControl sx={{
      width: '100%',
      marginTop: '15px',
      border: '1px solid #000',
      borderRadius: '10px'
    }}>
      <InputLabel id="duration-label"></InputLabel>
      <Select
        labelId="duration-label"
        id="duration"
        value={selectedDuration}
        onChange={(e) => onDurationChange(e.target.value)}
      >
        {durations.map((duration) => (
          <MenuItem key={duration} value={duration}>
            {`${duration} minutes`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
const App = () => {
  const [selectedDuration, setSelectedDuration] = useState(15);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  return (
    <div>

      <DurationSelector sx={{
        width: '100%'
      }}
        selectedDuration={selectedDuration}
        onDurationChange={handleDurationChange}
      />
      <p>Selected Duration: {selectedDuration} minutes</p>
    </div>
  );
};
function QuantityInput() {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleInputChange = (e) => {
    const enteredValue = parseInt(e.target.value, 10);
    if (!isNaN(enteredValue) && enteredValue >= 1) {
      setQuantity(enteredValue);
    } else {
      setQuantity(1);
    }
  };

  const backgroundImage = quantity > 0 ? 'url(path_to_your_image)' : 'url(default_image_path)';

  return (
    <NumberInput
      aria-label="Quantity Input"
      min={0}
      // max={99}
      value={quantity}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onChange={handleInputChange}
      style={{ backgroundImage }}
    />
  );
}
const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('div')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment,
  &.decrement {
    order: 1;
  }
`,
);


function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function DateValidationShouldDisableMonth() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ '& .MuiStack-root': { width: '100%' } }} components={['DatePicker']}>
        <DemoItem>
          <DatePicker
            sx={styling.inputStyle}
            label='Date Picker'

            minDate={dayjs(Date.now())}

            views={['year', 'month', 'day']}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
function TimePickerViewRenderers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          sx={styling.inputStyle}
          label="Time Picker"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={styling.labelStyle}>
          Terminal
        </InputLabel>
        <NativeSelect sx={styling.selectStyle}
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}

        >
          <option value={10}>Terminal No 1</option>
          <option value={20}>Terminal No 2</option>
          <option value={30}>Terminal No 3</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};
function NativeSelectDemo1() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={styling.labelStyle}>
          Point
        </InputLabel>
        <NativeSelect sx={styling.selectStyle}
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}

        >
          <option value={10}>Point No 1</option>
          <option value={20}>Point No 2</option>
          <option value={30}>Point No 3</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500, borderRadius: '30px' }}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', transform: 'translateY(-50%)' }}>
        <Tabs sx={[
          {
            // background: 'transparent',
            justifyContent: 'center',
            padding: '0 30px',
            gap: '30px',
            // backgroundColor: 'transparent',
            '& .tabs': {
              // backgroundColor: 'transparent',
              gap: '30px'
            },
            '& .css-axpu1l':{
                display:'none'
            },
            '& .css-11yukd5-MuiTabs-indicator': {
              display: 'none'
            }
          }
        ]}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={styling.tabStyle} label="One Way" {...a11yProps(0)} />
          <Tab sx={styling.tabStyle} label="By The Hour" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <form action="">
            <div className="mainhoster">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12">
                    <div className="mian-custom">
                      <div style={{ position: 'relative' }}>
                        <label htmlFor="" >
                          Pick Up Airport
                        </label>
                        <input type="text" placeholder='Los Angeles International Airport (LAX)' />
                        <FontAwesomeIcon className='airplane' icon={faPlane} />

                      </div>
                    </div>
                  </div>

                </div>

                <div className="row pt-2">
                  <div className="col-12 col-md-6">
                    <NativeSelectDemo />
                  </div>
                  <div className="col-12 col-md-6">
                    <NativeSelectDemo1 />
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-12 col-md-12">
                    <div className="mian-custom">
                      <div style={{ position: 'relative' }}>
                        <label htmlFor="" >
                          Drop Off
                        </label>
                        <input type="text" placeholder='7069 Mckinely Ave Los Angeles, Ca...' />
                        <FontAwesomeIcon className='airplane' icon={faHouse} />

                      </div>
                    </div>
                  </div>

                </div>
                <div className="row pt-3">
                  <div className="col-12 col-md-6 ">
                    <TimePickerViewRenderers />
                  </div>
                  <div className="col-12 col-md-6">
                    <DateValidationShouldDisableMonth />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-4 col-md-4">
                    <label htmlFor="" style={styling.labelStyle1}>Large Luggage</label>
                    <QuantityInput /></div>
                  <div className="col-4 col-md-4">
                    <label htmlFor="" style={styling.labelStyle1}>Small Luggage</label>
                    <QuantityInput /></div>
                  <div className="col-4 col-md-4">
                    <label htmlFor="" style={styling.labelStyle1}> Kids</label>
                    <QuantityInput /></div>
                </div>
                <div className="row pt-4">
                  <div className="col-6 col-md-6">
                    <CheckboxLabels sx={styling.labelStyle2} />
                  </div>
                  <div className="col-6 col-md-6">
                    <CheckboxLabels1 sx={styling.labelStyle2} />
                  </div>
                </div>
                <div className="row pt-2 pb-2">
                  <div className="col-12 col-md-12">
                    ,<div style={{
                      position: 'relative'
                    }}>
                      <label htmlFor="" style={styling.labelStyle15}>
                        Additional Service
                      </label>
                    </div>
                    <CheckboxLabels2 sx={styling.labelStyle2} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-12">
                    <CheckboxLabels3 sx={styling.labelStyle2} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="mainhoster">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                  <div className="mian-custom">
                    <div style={{
                      display: 'relative'
                    }}>
                      <label htmlFor="">
                        From
                      </label>
                    </div>
                    <input type="text" placeholder='Los Angeles International Airport (LAX)' />
                    <FontAwesomeIcon className='airplane' icon={faLocationDot} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                  <App />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                  <DateValidationShouldDisableMonth />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-12">
                  <TimePickerViewRenderers />
                </div>
              </div>
            </div>

          </div>
        </TabPanel>
      </SwipeableViews>
    </Box >

  );
}

