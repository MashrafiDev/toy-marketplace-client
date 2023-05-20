import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Unicorn_Toy from './Unicorn_Toy';
import Plush_Toy from './Plush_Toy';
import Rabbit_Toy from './Rabbit_Toy';

const TabsData = ({ tab }) => {
    const { Plush_toy, Rabbit_toy, Unicorn_toy } = tab
    console.log(tab)
    console.log(tab)
    return (
        <div>
            <Tabs className='w-[90%] mx-auto'>
                <TabList>
                    <Tab>Unicorn Toy</Tab>
                    <Tab>Plush Toy</Tab>
                    <Tab>Rabbit Toy</Tab>
                </TabList>

                <TabPanel>

                </TabPanel>
                <div className='lg:flex'>
                    {Unicorn_toy.map(unicorn => <Unicorn_Toy
                        unicorn={unicorn}
                    ></Unicorn_Toy>)}
                </div>
                <TabPanel>
                    <div className='lg:flex'>
                        {
                            Plush_toy.map(plush => <Plush_Toy
                                plush={plush}></Plush_Toy>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='lg:flex'>
                        {
                            Rabbit_toy.map(rabbit => <Rabbit_Toy
                                rabbit={rabbit}
                            ></Rabbit_Toy>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsData;