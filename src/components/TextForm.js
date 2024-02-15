// import React, { Component } from 'react'

// export default class TextForm extends Component {
//     render(props) {
//         return (
//             <div>
//                 <div class="mb-3">
//                     <label for="myBox">Example textarea</label>
//                     <textarea class="form-control" id="myBox" rows="3"></textarea>
//                 </div>
//             </div>
//         ) 
//     }
// }

import React, { useState } from 'react'
export default function TextForm(props) {
    // const zubair = useState("Zubair is good developer, he thought.");
    // console.log(zubair);
    const [text, setText] = useState("");
    // text is a state not a normal variable, so if you want to update it must use a function.
    // text = "new text" //wrong way to update the state
    // setText("new text"); //correct way to update the state

    const handleUpClick = () => {
        // console.log('handle on click');
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert('Text converted to upper case', 'success', 'success');
    }
    const handleOnChange = (event) => {
        // console.log('handle onchange');
        setText(event.target.value); //assining current text area value to "text" state
    }
    const handleLoClick = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Text converted to lower case', 'success', 'success');
    }
    const handleClearClick = () => {
        const emptyText = "";
        setText(emptyText);
        props.showAlert('Text cleared', 'success', 'success');
    }

    const [emails, setEmail] = useState("No Emails Found");
    const handleEmailExtract = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        // Use match method to find all email addresses in the text
        const matches = text.match(emailRegex);
        const emailsAddresses = matches || [];
        setEmail(emailsAddresses);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        // msg.lang = 'ur'; // Set the language to Urdu
        // console.log(window.speechSynthesis.getVoices());
        msg.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Google हिन्दी'); //set language to hindi
        window.speechSynthesis.speak(msg);
    }

    // copy text function
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied', 'success', 'success');
    }
    // remove extra spaces
    const handleRemoveExtraSpaces = () => {
        const textWithNoExtraSpace = text.replace(/\s+/g, ' ');
        setText(textWithNoExtraSpace);
        props.showAlert('Extra spaces removed', 'success', 'success');
    }
    return (
        <>
            <div className={`container ${props.darkMode ? "on" : "off"} `}>
                <h1 className={props.darkMode ? "on" : "off"}>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to lower case</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleEmailExtract}>Extract email addresses</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak <i className='fas fa-volume-down'></i></button>
                <button className="btn btn-primary  mx-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                {/* 125 words can be read in 1 minute, so to get the time of 1 word, 1/125=0.008 */}
                <p>
                    {/* {0.008 * text.split(" ").length} */}
                    {0.008 * text.replace(/\s+/g, '').length}   minute required to read the above text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>
                <h2>Extracted Emails</h2>
                <p>{emails}</p>
            </div>
        </>
    )
}
