import "./App.css";

function Post(props) {
    return (
        <div className="main">
            <img
                className="poster"
                src='logo192.png' />

            <div className="content">
                <p>Lorem ipsum dolor sit.                </p>

                <div className="btngroup">
                    <button className="btn1">Learn more</button>
                    <button className="btn2">Share</button>
                </div>
            </div>
        </div>
    );
}

export default Post;

