
function Meaning(props) {
    const listItems = props.meaning.map((number) =>
        <li>{number}</li>
    );
    return <div className={"menu-container"}>
        <div className={"ham"}>
            <div><i className="fa fa-bars" aria-hidden="true" onClick={props.describeAction}></i></div>
        </div>
        <div className={"menu"}>
            <div style={{"textDecoration": "underline"}}>{props.word}</div>
        </div>

        <div className={"menu"}>
            <ul>{listItems}</ul>
        </div>
    </div>

}
