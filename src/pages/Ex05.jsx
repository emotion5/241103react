// 5. List Rendering (key prop)
const List = () => {
    const items = ['A', 'B', 'C'];
    
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
   }

   export default List;
   // 배열 렌더링과 key prop의 중요성 설명
   // 목록, 테이블 등 반복되는 UI 구현할 때 사용