import { useAutoScroll } from './useAutoScroll';
import { ChatMessage } from './ChatMessage';
import './chatmessages.css' ;


      function  ChatMessages({chatMessages}){     
      const chatMessagesRef = useAutoScroll([chatMessages]);

        return(
          <div 
          className = "chat-message-container"
         ref={chatMessagesRef}>
           {chatMessages.map((chatMessage) => {
               return(
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender} 
                  key={chatMessage.id}         
                 />
               ); 
             })}
          </div> 
        );
      }
      export default ChatMessages;