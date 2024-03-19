import { useState } from "react";
import "./HideSecret.css"

const HideSecret = ({ text, secret } : {text:string, secret: string}) => {
    const [buttonText, setButtonText] = useState("Copy");

    const addSecret = (selectedText: string, text: string, secret: string): string => {
        let modifiedText: string;
        if(selectedText !== text) {
            modifiedText = selectedText + "<< copy the whole the string!";
        } else {
            modifiedText = text.replace(/\*+/g, secret);
        }
        return modifiedText
    }

    const handleCopy = (event:React.ClipboardEvent<HTMLTextAreaElement>, text: string, secret: string) => {
        const selectedText= window.getSelection()!.toString();
        
        const modifiedText = addSecret(selectedText, text, secret);
        event.clipboardData.setData('text/plain', modifiedText);
        setButtonText("Copied!")
        event.preventDefault();
    }

    const handleCopyButton = () => {
        const modifiedText = addSecret(text, text, secret);
        navigator.clipboard.writeText(modifiedText).catch(err => console.error("Failed to copy "+ err));
    }

    return (
        <div className="hide-password-container w-full max-w-md mx-auto mt-8 relative">
            <textarea className="text-content w-full h-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={text} placeholder={secret} onCopy={e => handleCopy(e, text, secret)} readOnly={true}>
            </textarea>
            <button  className="copy-button absolute bottom-2 right-0.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={() => {
                setButtonText("Copied!")
                handleCopyButton();
                }}>{buttonText}
            </button>
        </div>
    )
}

export default HideSecret;
