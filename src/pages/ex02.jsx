import React, { useState } from 'react';

const TextUpdate = () => {
    const [text, setText] = useState('업데이트 전');

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText('업데이트 완료')}>Update Text</button>
        </div>
    );
};

export default TextUpdate;