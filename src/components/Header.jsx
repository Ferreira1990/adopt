
function Header(props) {
    return (
        <div className="customtitle">
            <img src="/src/image/1.png" alt="Image" className="logo" />
            <h1 className="customh1">{props.title}</h1>
            <img src="/src/image/1.png" alt="Image" className="logo" />
        </div>
    )
}


export default Header;
