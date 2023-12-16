import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import carimage from '../images/silderimages.png'
import carselect from '../images/imgpsh_fullsize_anim.png'


const styling = {
    labelStyle: {
        border: '1px solid #000',
        fontFamily: 'Montserrat',
        textTransform: 'capitalize',
        color: '#000',
        opacity: '1',
        margin: '0 10px',
        borderRadius: '15px',
        width: '50%',
        background: '#fff',
        '&.Mui-selected': {
            background: '#000',
            color: "#fff"
        }
    },
    labelstyle1: {
        background: 'transparent',


    }


}

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

function CarSlider() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <section className='carSilder'>
                <div className="container">
                    <h5>OUR CARS</h5>
                    <h2>Vehicle Type We Provide</h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-12">
                            <Box sx={{
                                // bgcolor: 'background.paper',
                                backgroundColor: 'transparent',
                                // width: 500,
                                '& .MuiPaper-root': {
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none'
                                }

                            }}>
                                <AppBar position="static">
                                    <Tabs sx={[
                                        {
                                            background: 'transparent',
                                            justifyContent: 'center',
                                            padding: '0 30px',
                                            gap: '30px',
                                            backgroundColor: 'transparent',
                                            '& .tabs': {
                                                backgroundColor: 'transparent',
                                                gap: '30px',
                                                justifyContent: 'center'
                                            },
                                            '& .MuiTabs-indicator': {
                                             display: 'none'
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
                                        <Tab sx={[styling.labelStyle, { display: 'block', width: '500px', padding: '20px 80px', flexGrow: 'unset', marginLeft: 'auto' ,  marginBottom: '20px' }]} label="SUBURBAN" {...a11yProps(0)} />
                                        <Tab sx={[styling.labelStyle, { display: 'block', width: '500px', padding: '20px 80px', flexGrow: 'unset', marginRight: 'auto', marginBottom: '20px' }]} label="ESCALADE" {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabPanel value={value} index={0} dir={theme.direction}>
                                        <img src={
                                            carimage
                                        } className='img-fulid custom-cars' alt="img" />
                                    </TabPanel>
                                    <TabPanel value={value} index={1} dir={theme.direction}>
                                        <img src={
                                            carselect
                                        } className='img-fulid custom-cars' alt="img" />
                                    </TabPanel>

                                </SwipeableViews>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default CarSlider
