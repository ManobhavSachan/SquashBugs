import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import axios from "axios";

export default function RaiseBugs() {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [threat, setThreat] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useNavigate();
 

  const handleOnChange = (event) => {
    // console.log("On change");
    setDetail(event.target.value);
  };

  const handelSelect = (e) => {
		console.log(e.target.value);
		setThreat(e.target.value);
	};

  const submitHandler = async () => {
		if (!title || !detail || !location || !threat) {
			toast({
				title: "Please fill Required Fields",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		setLoading(true);
		console.log(title, detail, location, threat);
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const { data } = await axios.post(
				"/api/bugs",
				{
					title,
					detail,
					location,
					threat,
				},
				config
			);
			console.log("axios");
			toast({
				title: "Bug Report Succesfull",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			history("/resolvebugs");
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
		<>
			<div className="container my-3">
				<div className="mb-3">
					<h1>Raise Bugs</h1>
					<p>Describe Your Bug Here...</p>
					<textarea
						className="form-control"
						value={detail}
						onChange={handleOnChange}
						id="mybox"
						rows="5"
					></textarea>
				</div>
				<div className="input-group">
					<span className="input-group-text">Project Title</span>
					<input
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						value={title}
						type="text"
						aria-label="First name"
						className="form-control"
					/>
					<span className="input-group-text ml-3">Project URL</span>
					<input
						onChange={(e) => {
							setLocation(e.target.value);
						}}
						value={location}
						type="text"
						aria-label="First name"
						className="form-control"
					/>
				</div>

				<div className="my-3">
					<label htmlFor="formFileMultiple" className="form-label">
						Input Your Bug Report
					</label>
					<input
						className="form-control"
						type="file"
						id="formFileMultiple"
						multiple
					/>
				</div>
				<div className="my-3">
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">
							@
						</span>
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="addon-wrapping"
						/>
					</div>
				</div>
				<form action="/action_page.php">
					<label>Set Deadline :</label>
					<input type="date" />
				</form>
				<div className="input-group my-3">
					<label className="input-group-text" htmlFor="inputGroupSelect01">
						Threat Level
					</label>
					<Select
						onChange={(e) => handelSelect(e)}
						color="black"
						placeholder="Select option"
					>
						<option value="Low">Low</option>
						<option value="<Medium>">Medium</option>
						<option value="High">High</option>
					</Select>
				</div>
				<div className="">
					<button className="btn btn-dark auto" onClick={submitHandler}>
						Submit
					</button>
				</div>
			</div>
		</>
	);
}
