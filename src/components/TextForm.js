import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowClick =() =>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleClr =() =>{
    let newTest = (" ")
    setText(newTest)
  }

  const handleCopy =() =>{
    var newText = document.getElementById("myBox")
    newText.select();
    navigator.clipboard.writeText(newText.value)
  }

  const handleXtraSpace =() => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const handleOnChange =(event) =>{
    // console.log("On change")
    setText(event.target.value)
  }

  const [text, setText] = useState(" ");
  
  return (
    <>
    <div className="container mx-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 " >
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#313131':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleLowClick}>Lowercase</button>
        {/* <button className="btn btn-secondary mx-2" onClick={handleCapital}>Capitalized</button> */}
        <button className="btn btn-secondary mx-2 my-3" onClick={handleClr}>Clear</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-secondary mx-2 my-3" onClick={handleXtraSpace}>Perfect Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} Words {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read whole text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text for preview show"}</p>
    </div>
    </>
  )
}