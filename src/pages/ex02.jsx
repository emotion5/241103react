import React, { useState } from 'react';

const Ex02 = () => {
    const [text, setText] = useState('Hello, World!');

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText('Text has been updated!')}>Update Text</button>
        </div>
    );
};

export default Ex02;