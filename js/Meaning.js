
function Meaning(props) {
    const listItems = props.meaning.map((number) =>
        <li>{number}</li>
    );
    return <div className={"menu-container"} onClick={props.describeAction}>
        <div className={"ham"}>
            <div><i className="fa fa-home" aria-hidden="true" onClick={props.home}></i></div>
        </div>
        <div className={"menu meaning"}>
            <div style={{"textDecoration": "underline"}}>{props.word}</div>
        </div>

        <div className={"menu meaning"}>
            <ul>{listItems}</ul>
        </div>
    </div>

}
