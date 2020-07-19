function Week(props) {
    let classArray = [
        "list-group-item list-group-item-primary",
        "list-group-item list-group-item-secondary",
        "list-group-item list-group-item-success",
        "list-group-item list-group-item-danger",
        "list-group-item list-group-item-warning",
        "list-group-item list-group-item-info",
        "list-group-item list-group-item-light",
        "list-group-item list-group-item-dark",
    ];

    return (<li className={classArray[props.index % 8]} onClick={() => {
            props.selectWeek(props.week)
        }}> Words {props.index * 10 + 1} to {props.week * 10} </li>
    )
}
