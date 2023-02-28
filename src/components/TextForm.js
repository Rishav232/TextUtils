import React , {useState} from 'react'
export default function TextForm(props) {
    
    const handleOnClick=()=>{
        // console.log(text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper case","success")
        
    } 
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleAltClick=()=>{
        let str="";
        for(let i=0;i<text.length;i++)
        {
            if(text[i]!==" ")
            {
                if(text[i]===text[i].toUpperCase()){
                    str+=text[i].toLowerCase();
                }
                else{
                    str+=text[i].toUpperCase();
                }
            }
            else{
                str+=" ";
            }
        }
        setText(str);
        props.showAlert("Converted to alternate case","success")
    }
    const speak=()=>{
        const msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    const removeSpaces=()=>{
        const newText=text.replace(/\s+/g, " ").trim();
        setText(newText);
            props.showAlert("Extra Space Removed","success")
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }
    const [text,setText]=useState("");
  return (
    <>
            <h1 style={{color:props.mode==="white"?"black":"white"}}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" style={{color:props.mode==="white"?"black":"white"}} className="form-label"></label>
                <textarea className="form-control" style={{backgroundColor:props.mode==="white"?"white":props.mode==="dark"?"black":props.mode,color:props.mode==="white"?"black":"white"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:props.mode!=="white" && "white",color:props.mode!=="white"?"#0f0641":"white"}} onClick={handleOnClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"style={{backgroundColor:props.mode!=="white" && "white",color:props.mode!=="white"?"#0f0641":"white"}} onClick={handleAltClick}>Alternate Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:props.mode!=="white" && "white",color:props.mode!=="white"?"#0f0641":"white"}} onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:props.mode!=="white" && "white",color:props.mode!=="white"?"#0f0641":"white"}} onClick={removeSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor:props.mode!=="white" && "white",color:props.mode!=="white"?"#0f0641":"white"}} onClick={handleCopy}>Copy Text</button>
            {/* <button className="btn btn-primary mx-3" onClick={toggleStyle}>{txtBtn}</button> */}
        <div className="mb-3">
            <h2 style={{color:props.mode!=="white"&&"white"}}>Word Count</h2>
            
            <p style={{color:props.mode!=="white"&&"white"}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>   
        </div>
        <div className="mb-3" style={{color:props.mode==="white"?"black":"white"}}>
            Preview
            <p >{text.length!==0?text:"Nothing to Preview"}</p>
        </div>
        <div className="mb-3" style={{color:props.mode==="white"?"black":"white"}}>
            Time to Read
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        </div>
    </>
  );
}
