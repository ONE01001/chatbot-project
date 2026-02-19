import { useState  } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import './App.css'



      

 function App(){

        const [chatMessages , setChatMessages] = useState([ ]);
      // const [chatMessages , setChatMessages] = array; 
      // const chatMessages = array[0];
      // const setChatMessages = array[1];

      return(
          <div className = "app-container">
               {chatMessages.length === 0 
              &&(<p className ="Welcome-message" > 
              Welcome to the chatbot project!send a message using the text box below.
              </p>)}
              
            <ChatMessages 
            chatMessages = {chatMessages} 
            />

            <ChatInput 
             chatMessages = {chatMessages}
             setChatMessages = {setChatMessages}
             isLoading 
             
            />
         </div>
       );
      }
    

export default App
