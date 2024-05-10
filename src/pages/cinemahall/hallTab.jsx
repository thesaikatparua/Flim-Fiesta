import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./hallTab.css"; // Import CSS file for styling
import HallBottom from "./hallBottom"; // Importing component for TabPanel content
import "../../media query/Cinemahallres.css";


export default function LabTabs() {
  // State for managing current tab value
  const [value, setValue] = React.useState('1');

  // Function to handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  // Getting today's date
  const currentDate = new Date();
  let today = currentDate.toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

  // Getting tomorrow's date
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  let tomorrow = nextDate.toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

  // Getting the day after tomorrow's date
  const dayAfterTomorrow = new Date(currentDate);
  dayAfterTomorrow.setDate(currentDate.getDate() + 2);
  let dayAfter = dayAfterTomorrow.toLocaleString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }} className="box-container" >
      {/* Tab context for managing tab state */}
      <TabContext value={value} >
        {/* Tab list for displaying tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} className="box">
          {/* TabList component */}
          <TabList onChange={handleChange} aria-label="lab API tabs example"  className="tablist">
            {/* Tabs for today, tomorrow, and day after */}
            <Tab label={`${today}`} value="1" style={{ color:"black"}} id="tab"/>
            <Tab label={`${tomorrow}`} value="2" style={{ color:"black"}} id="tab" />
            <Tab label={`${dayAfter}`} value="3" style={{ color:"black"}} id="tab"/>
          </TabList>
        </Box>
        {/* TabPanels for rendering content */}
        <TabPanel value="1"><HallBottom/></TabPanel> {/* Content for today */}
        <TabPanel value="2"><HallBottom/></TabPanel> {/* Content for tomorrow */}
        <TabPanel value="3"><HallBottom/></TabPanel> {/* Content for day after */}
      </TabContext>
    </Box>

    </>
  );
}
