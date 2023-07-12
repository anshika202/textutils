import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText  = text.toUpperCase();
        setText(newText)
        props.Alert("uppercase enabled","success")
    }

    const handleLoClick = () =>{
      let newText  = text.toLowerCase();
      setText(newText)
      props.Alert("lowercase enabled","success")
  } 

  const handleClearText = () =>{
    let newText  = ' ';
    setText(newText)
}


const handleRemoveSpace = () =>{
  //let newText  = text.split(" ").join("");
  //let newText  = text.trim();
  setText(text.trim())
}

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('enter your text here');
  return (
    <>
          <div className="container ">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
        <div className="container">
          <button className="my-3 btn btn-primary my-3" onClick={handleLoClick}>Contvert to lower case</button>
          <button className="mx-3 btn btn-primary mx-3" onClick={handleClearText}>Clear text</button>
          <button className="mx-3 btn btn-primary mx-3" onClick={handleRemoveSpace}>remove white spaces</button>
        </div>

        

        <div className="container my-3">
          <h1>your text summary</h1>
          <p>
            no.of word s = {text.length} and no. of characters = {text.length}
          </p>
          <p>Preview</p>
          <p>{text}</p>
        </div>
    </>
     
  )
}
