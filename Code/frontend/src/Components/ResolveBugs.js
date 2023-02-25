import React, { useState } from "react";

export default function ResolveBugs() {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1>Resolve Bugs</h1>
          <p>Describe Your Solution Approach here...</p>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="input-group">
          <span className="input-group-text">Bug Code</span>
          <input type="text" aria-label="First name" className="form-control" />
        </div>
        <div className="my-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Input Your Bug Solution Here...
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        
        <div className="input-group my-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Optimisation of Solution for implementation
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option defaultValue="Select..."></option>
            <option value="Low">Fully Optimised</option>
            <option value="Medium">Partially Optimised</option>
            <option value="High">Not Optimised</option>
          </select>
        </div>
        <div className="">
          <button className="btn btn-dark auto" onClick={handleUpClick}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
