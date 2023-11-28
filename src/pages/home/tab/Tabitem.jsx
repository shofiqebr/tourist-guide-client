import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from './OverView';
import OurPackages from './ourPackages/OurPackages';

const Tabitem = () => {
  return (
    <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
    </TabList>

    <TabPanel>
      <h2><OverView></OverView></h2>
    </TabPanel>
    <TabPanel>
      <h2><OurPackages></OurPackages></h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

  );
};

export default Tabitem;