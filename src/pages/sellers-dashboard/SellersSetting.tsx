import React from 'react'
// import { TabPanel, useTabs } from '../../components/utility/WidgetComp';
import { TabSelector } from '../../components/utility/TabSelector';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SellersSetting = () => {
  //  const [selectedTab, setSelectedTab] = useTabs([
  //    "Account_Information",
  //    "Quality Control",
  //    "Notification",
  //    "Change Password",
  //  ]);

 const data = [
   {
     label: "HTML",
     value: "html",
     desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
   },
   {
     label: "React",
     value: "react",
     desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
   },

   {
     label: "Vue",
     value: "vue",
     desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
   },

   {
     label: "Angular",
     value: "angular",
     desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
   },

   {
     label: "Svelte",
     value: "svelte",
     desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
   },
 ];
  return (
    <div>
      <div className="flex justify-center place-items-start h-screen bg-[#fff]  ">
        <div className="max-w-screen-xl w-full flex bg-[#f4f4f4] h-[79%]   rounded-md overflow-hidden">
          <Tabs id="custom-animation" value="html" className="flex">
            <TabsHeader className="flex flex-row">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SellersSetting