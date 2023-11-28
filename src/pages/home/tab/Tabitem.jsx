import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from './OverView';
import OurPackages from './ourPackages/OurPackages';
import MeetGuide from './ourPackages/allPackages/MeetGuide';

const Tabitem = () => {
  return (

    <div>
    <h1 className='text-center text-3xl font-bold py-10'>
      Tourism and travel guide
    </h1>

   
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
      <h2><MeetGuide></MeetGuide></h2>
    </TabPanel>
  </Tabs>
  </div>
  );
};

export default Tabitem;