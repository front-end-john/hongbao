import React from 'react';
import { render } from 'react-dom';

require('./css/common.css');
require('./css/hongbao.css');

var top_img = require('./images/hongbao_top.png');
var bottom_img = require('./images/hongbao_bottom.png');
var App = React.createClass({
    render: function (){
        return (
            <div className="hongbao">
                <div className="hb-top">
                    <img src={top_img}/>
                </div>    
                <div className="hb-bottom">  
                    <div className="hb-content">
                        <div className="hb-value">
                            <span className="hb-number">10</span>
                            <span className="hb-yuan">元</span>
                        </div> 
                        <div className="hb-desc">
                            使用邮储卡绑定微信支付消费成功<br/>
                            小邮给您发红包啦！
                        </div>  
                        <div className="hb-btn">
                            <button id="get-hb">红包领取</button>
                        </div>                     
                    </div>
                    <img src={bottom_img}/>
                </div>          
            </div>
        );
    }
});
render(<App/>, document.querySelector('#wrap'));