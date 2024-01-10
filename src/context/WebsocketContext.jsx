import { createContext, useContext } from 'react';
import { io } from 'socket.io-client';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const WebsocketContext = createContext();

function WebsocketProvider({ children }) {
  const [token] = useLocalStorageState(
    localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    'token',
  );
  const socket = io('http://localhost:3000', {
    extraHeaders: {
      authorization: 'Bearer ' + token,
    },
  });
  console.log('token: ' + token);
  return <WebsocketContext.Provider value={{ socket }}>{children}</WebsocketContext.Provider>;
}
function useWebsocket() {
  const context = useContext(WebsocketContext);
  if (context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useWebsocket };
export default WebsocketProvider;
