// 6. Context (useContext basic)
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
 return (
   <ThemeContext.Provider value="dark">
     {children}
   </ThemeContext.Provider>
 );
}

export const ThemedButton = () => {
 const theme = useContext(ThemeContext);
 return <button>{theme} mode</button>;
}
// Context API로 전역 상태 관리 설명
// 테마, 언어 등 전역적으로 공유되는 값 관리할 때 사용

const Ex06 = () => {
    return (
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    );
  }
  
export default Ex06;
