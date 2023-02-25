import {
	Button,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [pic, setPic] = useState("");
	const [isHidden, setHidden] = useState(true);
	const [loading, setLoading] = useState(false);

	const toast = useToast();
	const history = useNavigate();

	const hideShow = () => {
		setHidden(!isHidden);
	};

	const handelSelect = (e) => {
		console.log(e.target.value);
		setRole(e.target.value);
	}

	const postDetails = (pics) => {
		setLoading(true);
		if (pics === undefined) {
			toast({
				title: "Please Upload A Valid Picture",
				// description: "We've created your account for you.",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		console.log(pics);
		if (pics.type === "image/jpeg" || pics.type === "image/png") {
			const data = new FormData();
			data.append("file", pics);
			data.append("upload_preset", "chat-app");
			data.append("cloud_name", "ank8t");
			fetch(
				"https://api.cloudinary.com/v1_1/CLOUDINARY_URL=cloudinary://894566168629211:1Z7lZwiVFaotJVG-wGxc9oO54pc@ank8t/image/upload",
				{
					method: "post",
					body: data,
				}
			)
				.then((res) => res.json())
				.then((data) => {
					setPic(data.url.toString());
					console.log(data.url.toString());
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		} else {
			toast({
				title: "Please Select an Image!",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}
	};

	const submitHandler = async () => {
		if (!name || !email || !password || !confirmPass || !role) {
			toast({
				title: "Please fill all Fields",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		if (password !== confirmPass) {
			toast({
				title: "Password does'nt match",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		setLoading(true);
		console.log(name, email, password, pic, role);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const { data } = await axios.post(
				"/api/user",
				{
					name,
					email,
					password,
					pic,
					role,
				},
				config
			);
			console.log("axios");
			toast({
				title: "Registration Succesfull",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			localStorage.setItem("userInfo", JSON.stringify(data));
			setLoading(false);
			history("/raisebugs");
		} catch (error) {
			console.log(error);
			toast({
				title: "Error Occured",
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
				<FormLabel htmlFor="Name">Name</FormLabel>
				<Input
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
					id="name"
					type="text"
					placeholder="What should we Call you"
				/>
			</FormControl>
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
						// value={password}
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
			<FormControl isRequired>
				<FormLabel htmlFor="password">Confirm Password</FormLabel>
				<Input
					onChange={(e) => {
						setConfirmPass(e.target.value);
					}}
					id="confirmPassword"
					type="password"
				/>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Select Acsses</FormLabel>
				<Select
					onChange={(e) => handelSelect(e)}
					color="black"
					placeholder="Select option"
				>
					<option value="admin">Admin</option>
					<option value="employee">Employee</option>
					<option value="user">User</option>
				</Select>
			</FormControl>
			<FormControl id="pic">
				<FormLabel>Upload your Picture</FormLabel>
				<Input
					type="file"
					p={1.5}
					accept="image/*"
					onChange={(e) => postDetails(e.target.files[0])}
				/>
			</FormControl>
			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
				isLoading={loading}
			>
				Sign Up
			</Button>
		</Container>
	);
}

export default SignUp;
