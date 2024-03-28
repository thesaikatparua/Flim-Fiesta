import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./hallTop.css";
import HallBottom from "./hallBottom";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  //for date
  const d = new Date();
  let date = d.getDate();

  //for day
  let daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = new Date().getDay();
let dayName = daysArray[day];

  //for month
  let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = new Date().getMonth();
  let monthName = monthsArray[month];

  
  return (
    <Box sx={{ width: '100%', typography: 'body1', }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} className="box">
          <TabList onChange={handleChange} aria-label="lab API tabs example"  className="tablist">
            <Tab label={`${dayName} ${monthName} ${date}`} value="1" style={{ color:"black"}} />
            <Tab label={`${dayName} ${monthName} ${date+1}`} value="2" style={{ color:"black"}} />
            <Tab label={`${dayName } ${monthName} ${date+2}`} value="3" style={{ color:"black"}}/>
          </TabList>
        </Box>
        <TabPanel value="1"><HallBottom/></TabPanel>
        <TabPanel value="2"><HallBottom/></TabPanel>
        <TabPanel value="3"><HallBottom/></TabPanel>
      </TabContext>
    </Box>
  );
}
