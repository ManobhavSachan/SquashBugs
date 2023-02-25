import {Box,Container,TabList,Tabs,Tab,TabPanel,TabPanels,} from "@chakra-ui/react";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function HomePage() {
	return (
		<Container centerContent maxW="xl">
			<Box
				bg="teal"
				display="flex"
				width="100%"
				p={4}
				color="white"
				justifyContent="center"
				margin={"20px"}
				borderRadius={"7px"}
			>
				Squash bugs
			</Box>

			<Box bg="Grey" width="100%" p={4} color="white">
				<Tabs variant="soft-rounded">
					<TabList>
						<Tab width={"50%"} >LogIn</Tab>
						<Tab width={"50%"} >SignUp</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Login/>
						</TabPanel>
						<TabPanel>
                            <SignUp/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
}

export default HomePage;
