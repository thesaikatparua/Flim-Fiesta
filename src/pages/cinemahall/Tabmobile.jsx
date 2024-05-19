import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState } from "react";
import "../../media query/Cinemahallres.css";
import Hallmobile from "../../pages/cinemahall/Hallmobile"

const Tabmobile = () => {
  const [key, setKey] = useState("tab2");

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
      <div className="App">
        <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <TabList>
            <Tab eventKey="tab1">{today}</Tab>
            <Tab eventKey="tab2">{tomorrow}</Tab>
            <Tab eventKey="tab3">{dayAfter}</Tab>
          </TabList>
          <TabPanel>
          <Hallmobile/>
          </TabPanel>
          <TabPanel>
          <Hallmobile/>
          </TabPanel>
          <TabPanel>
          <Hallmobile/>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Tabmobile;
