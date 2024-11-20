// 4. Effects (useEffect basic)
import { useState, useEffect } from 'react';

const Timer = () => {
 const [time, setTime] = useState(0);
 
 useEffect(() => {
   const timer = setInterval(() => {
     setTime(prev => prev + 1);
   }, 1000);
   
   return () => clearInterval(timer);
 }, []);
 
 return <p>{time} seconds passed</p>;
}
// useEffect와 cleanup 함수 설명
// 타이머, API 호출, 구독 등 side effect 처리할 때 사용

export default Timer;