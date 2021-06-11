import './App.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Component1 from './view/Component/Component1';
import Component2 from './view/Component/Component2';
import Component3 from './view/Component/Component3';
import Component4 from './view/Component/Component4';
import Component5 from './view/Component/Component5';
import Component6 from './view/Component/Component6';
import Footer from './view/Footer/Footer';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(1);

    const next = () => {
        if (count < 6) setCount(count + 1);
    };
    const back = () => {
        if (count > 1) setCount(count - 1);
    };
    console.log(count);
    return (
        <div>
            {count === 1 && <Component1 />}
            {count === 2 && <Component2 />}
            {count === 3 && <Component3 />}
            {count === 4 && <Component4 />}
            {count === 5 && <Component5 />}
            {count === 6 && <Component6 />}

            <div className="button">
                <p
                    style={{
                        color: 'black',
                        textAlign: 'end',
                        margin: '4px 0px',
                        marginRight: '8px',
                    }}
                >
                    stage {count}
                </p>
                <button onClick={back}>
                    <LeftOutlined />
                </button>
                <button onClick={next}>
                    <RightOutlined />
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default App;
