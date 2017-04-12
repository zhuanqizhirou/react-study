/**
 * Created by Administrator on 2017/4/12 0012.
 */
import React from "react";
import ReactDOM from "react-dom";

function tick() {
    const e=(
        <div>
            <h1>Hello,React</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(e,document.getElementById('root'))
}
setInterval(tick,1000);
