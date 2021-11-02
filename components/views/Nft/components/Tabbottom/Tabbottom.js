import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <div className="tab_bottom">
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab 
            icon={
            <img
              src="/images/tab-1.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
            label={<span>Bids</span>} {...a11yProps(0)} />
            <Tab 
             icon={
            <img
              src="/images/tab-2.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
            label={<span>Owners</span>} {...a11yProps(1)} />
            <Tab 
             icon={
            <img
              src="/images/tab-3.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
            label={<span>Stats</span>} {...a11yProps(2)} />
            <Tab 
             icon={
            <img
              src="/images/tab-4.svg"
              alt=""
              width="25"
              height="auto"
            /> 
          }
            label={<span>History</span>} {...a11yProps(3)} />
          </Tabs>
        </div>

      </Box>
      <TabPanel value={value} index={0}>
        <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/lee.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Ruth Lee</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
             
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Ellipse.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Christine Roberts</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Francine.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Francine Meyer</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Rose Sullivan.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Rose Sullivan</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/lee.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Ruth Lee</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

            <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Ellipse.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Christine Roberts</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>


      </TabPanel>
      <TabPanel value={value} index={1}>
          
           <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Francine.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Francine Meyer</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Rose Sullivan.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Rose Sullivan</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/lee.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Ruth Lee</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
       <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/lee.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Ruth Lee</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
             
                  </div>
               </div>
            </div>
            
             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Francine.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Francine Meyer</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>
      </TabPanel>
       <TabPanel value={value} index={3}>
       <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Ellipse.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Christine Roberts</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Francine.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Francine Meyer</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/Rose Sullivan.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Rose Sullivan</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>

             <div className="tab-inner">
               <div className="tab-img">
                  <img src="images/lee.png"/>
               </div>
               <div className="tab-info">
                  <p className="tab-t">Ruth Lee</p>
                  <div className="tab-time">
                     <p><strong>@1.25 ETH</strong>for 1 edition</p>
                     <p>7/15/2021, 8:27AM</p>
                  </div>
               </div>
            </div>
      </TabPanel>
    </Box>
  );
}
