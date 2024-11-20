// 3. Parent-Child (props passing)
const Parent = () => {
    return <Child name="영민" />;
   }
   
const Child = ({ name }) => {
    return <p>Hello, {name}!</p>;
   }
   // 컴포넌트 간 props 전달 설명
   // 컴포넌트 재사용과 데이터 흐름 이해
   // 모든 컴포넌트 구조에서 기본이 되는 패턴
   export default Parent;