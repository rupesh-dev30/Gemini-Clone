import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();



const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        }, 70*index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let respone;
        if(prompt !== undefined){
            respone = await runChat(prompt);
            setRecentPrompt(prompt);
        }else{
            setPrevPrompt(prev => [...prev,input]);
            setRecentPrompt(input);
            respone = await runChat(input);
        }
        
        let responeArray = respone.split("**");
        let newResponse ="" ;
        for(let i = 0 ; i<responeArray.length; i++){
            if(i === 0 || i%2 === 0){
                newResponse += responeArray[i];
            }else{
                newResponse += "<b>"+responeArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");

        for(let i=0 ; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }

        setResultData(newResponse2);
        setLoading(false);
        setInput("");

    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;