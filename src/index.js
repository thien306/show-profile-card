import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <div className="card">
            <div className="card--header"/>
            <img
                className="avatar"
                src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/425567330_768752905156957_2336636500508483584_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeElb32f6q5Am0qM38I0CU3UPEpxof5rHGA8SnGh_mscYDnN3r3R-0P9SGiadmzNzjPcf5ECfTYsG-A2U7Plcz1U&_nc_ohc=VZnKYGVgoLMQ7kNvgE2CO2_&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDnRnpyQr4QyxFW6Pzq4FZ9eUPqYPWwB_6UAjsKChoVyQ&oe=66CCAFCC"
                alt="avatar"
            />
            <div className="card--body">
                <div>
                    <p className="text-header">Quốc Thiên</p>
                    <p className="text-sub">
                        am i good enough
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
);

