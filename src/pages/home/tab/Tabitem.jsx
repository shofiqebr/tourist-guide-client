import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabitem = () => {
  return (
    <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

  );
};

export default Tabitem;