function Word(props) {

    return <div className={"menu-container"}>
        <div className={"ham"}>
            <div><i className="fa fa-home" aria-hidden="true" onClick={props.home}></i></div>
        </div>
        <div className={"menu"}>
            <div onClick={()=> props.navigate(-1)}>
                <i className="fa fa-caret-left btn left" aria-hidden="true" style={{"fontSize": "2.5em"}}></i>
            </div>
            <div className="word" onClick={props.describeAction}>{props.word} ({props.type})</div>
            <div  onClick={()=> props.navigate(1)}>
                <i className="fa fa-caret-right btn right" aria-hidden="true" style={{"fontSize": "2.5em"}}></i>
            </div>
        </div>
    </div>
}

