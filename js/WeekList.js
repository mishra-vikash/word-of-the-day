function WeekList(props) {
    let weekListContainer = weekList.map( (week, i) => {
        return <Week  week={week} index={i} selectWeek={props.selectWeek}/>
    })
    return (<ul className={"list-group"}>
        {weekListContainer}
    </ul>)
}
