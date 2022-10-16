import React, {useState} from 'react'
//here we imported usestate hook from react and  text will contain the value Enter text here
//and I will update this text using this function

export default function TextForm(props) {
    const [text, setText] = useState('');
    //text = "ahaf"; Can't change it like this
    const handleUpClick = ()=>{
       // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleDownClick = ()=>{
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowercase","success");
     }
     const handleTrimClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Trimmed whitespace","success");
     }
     const handleExtraClick = ()=>{
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "));
         props.showAlert("Extraspace removed","success");
     }
     const handleClClick = ()=>{
         setText('');
     }
    //setText = ("Please Enter");
    const handleOnChange = (event)=>{
             //console.log("HandleOnchage was clicked");
             setText(event.target.value);
         }
        
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* One curly brace is for jaavscript and other is for object of javascript*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" style={{backgroundColor: props.mode==='dark'?'#2c2727':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2"onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2"onClick={handleDownClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2"onClick={handleClClick}>Clear All</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2"onClick={handleExtraClick}>Remove ExtraSpace</button>
        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2"onClick={handleTrimClick}>Trim WhiteSpace</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        {/* <p>{text.length>0?text.trim().split("").length : 0} words and {text.length} characters</p> */}
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
