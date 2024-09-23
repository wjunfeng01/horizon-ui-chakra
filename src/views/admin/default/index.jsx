/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import TotalSpent1 from "./components/TotalSpent1";
import TotalSpent2 from "./components/TotalSpent2";
import HeatMap from "./components/Heatmap";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
              }
            />
          }
          name='Total Sales Today'
          value='SGD $3500.40'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          growth='+23%'
          name='Average Order Value'
          value='$124.39'
        />
        <MiniStatistics growth='+4%' name='Revenue per Sq Ft' value='$574.34' endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>Wisma</option>
                <option value='eur'>ION</option>
                <option value='gba'>Suntec</option>
              </Select>
            </Flex>
          }/>
        <MiniStatistics
          endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>Retail</option>
                <option value='eur'>Ecom</option>
                <option value='gba'>Atrium</option>
              </Select>
            </Flex>
          }
          name='Sales Channels (Daily)'
          value='$6,239'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Inventory Turnover'
          value='3.4'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Monthly Turnover'
          value='$2,080,104'
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap='20px' mb='20px'>
        <TotalSpent/>
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap='20px' mb='20px'>
      <MiniStatistics
          endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>Public Holiday</option>
                <option value='eur'>Normal Day</option>
              </Select>
            </Flex>
          }
          name='Average Revenue'
          value='$1,256'
        />
        <MiniStatistics
        endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>CBD</option>
                <option value='eur'>Heartland</option>
              </Select>
            </Flex>
          }
          name='Average Revenue'
          value='$2,576'
        />
        <MiniStatistics
        endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>Weekends</option>
                <option value='eur'>Weekdays</option>
              </Select>
            </Flex>
          }
          name='Average Revenue'
          value='$7,359'
        />
        <MiniStatistics
          endContent={
            <Flex me='-5px' mt='10px'>
              <FormLabel htmlFor='balance'>
                {/* <Avatar src={Usa} /> */}
                {/* <Avatar>
                  <LanguageIcon></LanguageIcon>
                </Avatar> */}
              </FormLabel>
              <Select
                id='balance'
                // variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>Promotion</option>
                <option value='eur'>No Promotion</option>
              </Select>
            </Flex>
          }
          name='Average Revenue'
          value='$475'
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <WeeklyRevenue />
        <HeatMap />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent1/>
        <TotalSpent2/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
