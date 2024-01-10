import React ,{useState} from 'react'

export default function TextForm(props) {
   
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case! ","success")
  }

  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case! ","success")
  }
  const handleClearClick=()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text box is clear! ","success")
  }
  const handleSubmitClick =()=>{
    alert("Text submitted...");
    handleClearClick();
    props.showAlert("Text submitted ! ","success")
  }
  const handleOnChnage =(event)=>{
    setText(event.target.value);
  }
  
  const [text, setText] = useState("")

  return (
    <>
    <div className='container'>
        <h1>{props.heading} - </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSubmitClick}>Submit</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>number of words can read {0.008 * text.split(" ").length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something on the box to preview..."}</p>
    </div>
    </>
  )
}
