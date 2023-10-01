import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpclick =()=>{
        console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick =()=>{
       console.log("Lowercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState();
    //text="new text";//worng way chnage the  state
    //setText{"new Text"};//correct way to change the state
return (
    <>
    <div className="container">
    
        <h1>{props.heading}</h1>
         <div class="mb-3">
            <lable for="mybox" class="form-lable">Example textarea</lable>
            <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
            
             
           </div>
           <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words And {text.length} characters</p>
            <p>{0.005* text.split(" ").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
            </>
  )
}
