import React, { useState } from 'react';
import styled from 'styled-components';
import { QqOutlined, BorderOutlined, QuestionOutlined } from '@ant-design/icons';

const Component1 = () => {
    const [answer, setAnswer] = useState(false);
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');
    const [text5, setText5] = useState('');

    const Stylediv = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 98%;
        height: 98%;
        margin: auto;
        ${text1}
        ${text2}
        ${text3}
        ${text4}
        ${text5}
    `;

    const change1 = (e) => {
        setText1(e.target.value);
    };
    const change2 = (e) => {
        setText2(e.target.value);
    };
    const change3 = (e) => {
        setText3(e.target.value);
    };
    const change4 = (e) => {
        setText4(e.target.value);
    };
    const change5 = (e) => {
        setText5(e.target.value);
    };

    const qa = () => {
        setAnswer(true);
    };
    return (
        <div className="gameForm">
            <div className="form">
                <h2>펭귄을 찍어보자!</h2>
                <h4 style={{ lineHeight: '1.5' }}>
                    css의 태그를 사용하여 펭귄을 카메라 포커스에 맞춰보자! 깔끔하게 맞춘 포커스는
                    펭귄의 귀여움을 더 잘 담을지도?
                    <br />
                    display: flex 로 선언되어있는 flex-box에 대해 게임을 통해 공부해보자!
                </h4>
                <h4 style={{ marginBottom: '10px' }}>칸은 총 9*9개로 이루어져 있습니다 :)</h4>
                <div className="formBoard">
                    <div className="formLeft">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                    <div className="formRight">
                        <input onChange={change1}></input>
                        <input onChange={change2}></input>
                        <input onChange={change3} disabled></input>
                        <input onChange={change4} disabled></input>
                        <input onChange={change5} disabled></input>
                    </div>
                </div>
                <div className="help">
                    <button onClick={qa}>
                        <QuestionOutlined />
                    </button>
                </div>
                {answer && <h3>justify-content와 align-items를 사용해보자!</h3>}
            </div>
            <div className="rightForm">
                <Stylediv>
                    <QqOutlined />
                    <QqOutlined />
                </Stylediv>
            </div>
            <div className="twoForm">
                <div className="twoFormI4">
                    <BorderOutlined />
                    <BorderOutlined />
                </div>
            </div>
        </div>
    );
};

export default Component1;
