class Main extends React.Component {
    constructor(props){
        super(props);
        this.selectWeek =  this.selectWeek.bind(this);
        this.home =  this.home.bind(this);
        this.state = {
            week : 1,
            showWords: false,
            startIndex: 0,
            endIndex: 9
        }
    }

    selectWeek = (weekNumber) =>{
        this.setState({week: weekNumber, showWords: true, startIndex: (weekNumber - 1) * 10, endIndex:  weekNumber * 10 - 1})
    }

    home = () =>{
        this.setState({ showWords: false})
    }

    render(){
        if(this.state.showWords){
            return <WordOfTheDay startIndex={this.state.startIndex} endIndex={this.state.endIndex} home={this.home}/>
        }else {
            return <WeekList selectWeek={this.selectWeek}/>
        }

    }
}
