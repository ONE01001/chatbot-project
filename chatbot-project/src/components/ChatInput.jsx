     import { useState } from 'react'
     import { Chatbot } from 'supersimpledev';
     import './chatinput.css' ;
     import LoadingImage from '../assets/loading-spinner.gif';
     
     export function ChatInput({chatMessages , setChatMessages}){
      const [inputText , setInputText] = useState('');
      const [isLoading , setIsLoading]= useState(false);
        
     function saveInputText(event){
        setInputText(event.target.value);
      }
      
        async function sendMessage() {
          if (isLoading || inputText === ''){
            return;
          }
          setIsLoading(true);

          setInputText('')
            const newChatMessages = [
              ...chatMessages,
            {  
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
        ];

        setChatMessages([
          ...newChatMessages,
          {
            message: <img src = {LoadingImage} className ="loading-spinner"/>,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        Chatbot.addResponses()

        const response =  await Chatbot.getResponseAsync(inputText);
         setChatMessages([
            ...newChatMessages,
           {  
             message: response,
             sender: 'robot',
             id: crypto.randomUUID()
           }

        ]);
            setInputText('');
            setIsLoading(false);
        }  

      function handelKeyDown(event){
        if( event.key === 'Enter')
        {
          sendMessage((setInputText(''))) ;
        }

        else (event.key === 'Escape' &&  setInputText(''))
      }

      return(
        <div className = "chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="30"
            onChange = {saveInputText}
            value = {inputText}
            onKeyDown = {handelKeyDown}
            className = "chat-input"
          /> 

           <button
            onClick = {sendMessage}
            className = "Send-button">
              Send
           </button>
        </div>
      );
     }