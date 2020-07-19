// Obtain the root
const rootElement = document.getElementById('root')
const words = [
    {
        word: "Surfeit",
        type: "noun",
        meaning: ["cause (someone) to desire no more of something as a result of having consumed or done it to excess."]
    },
    {word: "Captious", type: "adjective", meaning: ["tending to find a fault on petty Objections"]},
    {word: "Lassitude", type: "noun", meaning: ["Lethargy, sluggishness"]},
    {word: "Placid", type: "adjective", meaning: ["(of a person or animal) not easily upset or excited"]}
]

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

function Meaning(props) {
    const listItems = props.meaning.map((number) =>
        <li>{number}</li>
    );
    return <div className={"menu-container"}>
        <div className={"ham"}>
            <div><i className="fa fa-bars" aria-hidden="true" onClick={props.describeAction}></i></div>
        </div>
        <div className={"menu"}>
            <div>{props.word}</div>
        </div>

        <div className={"menu"}>
            <ul>{listItems}</ul>
        </div>
    </div>

}

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

/**
 *
 * @returns {*}
 * @constructor
 */

class WordOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.describeAction = this.describeAction.bind(this);
        this.state = {
            current: 0,
            describe: false,
            words: words
        };
    }

    navigate = (factor) => {
        this.setState({describe: false})
        let current = this.state.current;
        if (this.state.current + factor > this.state.words.length - 1) {
            current = 0;
        } else if (this.state.current + factor < 0) {
            current = this.state.words.length - 1;
        } else {
            current = this.state.current + factor
        }
        this.setState({current: current})
    }

    describeAction = () => {
        this.setState({describe: !this.state.describe})
    }

    render() {
        return (<div className="container">
            <Card word={this.state.words[this.state.current].word} type={this.state.words[this.state.current].type}
                  meaning={this.state.words[this.state.current].meaning} describe={this.state.describe}
                  describeAction={this.describeAction}/>
            <div className="shift-right">
            <div className="buttonContainer" style={{"marginBottom": "-1.5em"}}>
                <i className="fa fa-caret-up btn" aria-hidden="true" onClick={() => this.describeAction()}
                   style={{"fontSize": "2em"}}></i>
            </div>
            <div className="buttonContainer" style={{"marginBottom": "-1.5em"}}>
                <i className="fa fa-caret-left btn" aria-hidden="true" onClick={() => this.navigate(1)}
                   style={{"fontSize": "2.5em"}}></i>
                <i className="fa fa-caret-right btn" aria-hidden="true" onClick={() => this.navigate(1)}
                   style={{"fontSize": "2.5em"}}></i>
            </div>
            <div className="buttonContainer">
                <i className="fa fa-caret-down btn" aria-hidden="true" onClick={() => this.describeAction()}
                   style={{"fontSize": "2em"}}></i>
            </div>
            </div>
        </div>)
    }
}


// Create a function to wrap up your component
function App() {
    return (
        <div>
            <WordOfTheDay/>
        </div>
    );
}


// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <App/>,
    rootElement
)
