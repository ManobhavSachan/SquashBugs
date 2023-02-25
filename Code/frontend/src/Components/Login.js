import { Container, FormControl, FormHelperText, FormLabel, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useToast } from "@chakra-ui/react";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isHidden, setHidden] = useState(true);
const [loading, setLoading] = useState(false);

const toast = useToast();
const history = useNavigate();


const hideShow = () => {
	setHidden(!isHidden);
};

	
	const submitHandler = async () => {
		setLoading(true);
		if (!email || !password) {
			toast({
				title: "Please Fill all the Feilds",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}

		// console.log(email, password);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				"/api/user/login",
				{ email, password },
				config
			);

			// console.log(JSON.stringify(data));
			toast({
				title: "Login Successful",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			localStorage.setItem("userInfo", JSON.stringify(data));
			setLoading(false);
			history("/diffpage");
		} catch (error) {
			toast({
				title: "Error Occured!",
				description: error.response.data.message,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		}
	};


    return (
			<Container>
				<FormControl isRequired>
					<FormLabel htmlFor="email">Email address</FormLabel>
					<Input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
						id="email"
						type="email"
					/>
					<FormHelperText>We'll never share your email.</FormHelperText>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Password</FormLabel>
					<InputGroup>
						<Input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							id="password"
							type={isHidden ? "password" : "text"}
							placeholder="keep it Strong"
						/>
						<InputRightElement marginRight={"4px"}>
							<Button
								onClick={hideShow}
								size="sm"
								isAttached
								variant="outline"
								mr="-px"
							>
								{isHidden ? <span>Show</span> : <span>Hide</span>}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Button
					colorScheme="blue"
					width="100%"
					style={{ marginTop: 15 }}
					onClick={submitHandler}
					isLoading={loading}
				>
					LogIn
				</Button>
				<Button
					colorScheme="blue"
					width="100%"
					style={{ marginTop: 15 }}
					onClick={() => {
						setEmail("guestuser@chitchat.com");
						setPassword("Special@guest");
					}}
				>
					GET GUEST USER CREDENTIAL
				</Button>
			</Container>
		);
}

export default Login
