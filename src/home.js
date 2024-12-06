import './App.js'
function home(props){
    return(
        <div id="container">
            <div id="image">
                <img src={props.src} alt="pic" width="210"></img>
            </div>
            
            <div id="content">
                <h2>{props.name}</h2>
                <ul>
                    <li>{props.l1}</li>
                    <li>{props.l2}</li>
                    <li>{props.l3}</li>
                    <li>{props.l4}</li>
                    <li>{props.l5}</li>
                    <li>{props.l6}</li>
                </ul>
            </div>

            <div id="price">
                <h3>₹{props.price}</h3> <img id="flip" width="50" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt=""></img>
                <del>₹{props.offer}</del>&nbsp;&nbsp;&nbsp;
                <p id="first">{props.off}%&nbsp;off</p><br/>
                Free delivery<br/>
                <b>save extra combo offer</b>
                <br/>
                <p id="last">Upto {props.amount} Off on Exchange</p>
            </div>
        </div>
    );
}
export default home;