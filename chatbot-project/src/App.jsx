import { useState , useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'



      

 function App(){

      const [chatMessages , setChatMessages] = useState([ ]);
      // const [chatMessages , setChatMessages] = array; 
      // const chatMessages = array[0];
      // const setChatMessages = array[1];
     
      useEffect(()=> {
        Chatbot.addResponses({
        Easteregg:` Hi , My full name is Hardik rana , 
        I am a Student currently pursuing (BCA) , 
        This is a small Chatbot project , 
        that i have created . 
        I am also a 3D artist , that uses blender to do modeling ,
        texturing animation and much more. 
        If you here till the end , 
        thaaaanks for giving me some of your time to read this , 
        (どうも ありがとう ございます).`,
         
       });
      }, []);



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
