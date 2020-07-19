function Word(props) {

    return <div className={"menu-container"}>
        <div className={"ham"}>
            <div><i className="fa fa-bars" aria-hidden="true" onClick={props.describeAction}></i></div>
        </div>
        <div className={"menu"}>
            <div className="word">{props.word} ({props.type})</div>
        </div>

    </div>
}
