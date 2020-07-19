function Card(props) {
    if (props.describe) {
        return <div className="card">
            <Meaning {...props}/>
        </div>
    } else {
        return <div className="card">
            <Word {...props}/>
        </div>
    }
}
