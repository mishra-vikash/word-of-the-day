// Obtain the root
const rootElement = document.getElementById('root')

/**
 *
 * @returns {*}
 * @constructor
 */

class WordOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 2, words: [
                {word: "Surfeit", type: "noun", meaning: "cause (someone) to desire no more of something as a result of having consumed or done it to excess."},
                {word: "Captious", type: "adjective", meaning: "tending to find a fault on petty Objections"},
                {word: "Lassitude", type: "noun", meaning: "Lethargy, sluggishness"},
                {word: "Placid", type: "adjective", meaning: "(of a person or animal) not easily upset or excited"}
            ]
        };
    }

    navigate = (factor) => {
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

    render() {
        return (<div className={"container"}>

            <div className="card">
                <div className="word-of-the-day">{this.state.words[this.state.current].word}</div>
                <div className="type">{this.state.words[this.state.current].type}</div>
                <div className="meaning">{this.state.words[this.state.current].meaning}</div>
            </div>
            <div className="buttonContainer">
                <button className={"btn btn-primary"} onClick={() => this.navigate(-1)}>Previous</button>
                <button className={"btn btn-primary"} onClick={() => this.navigate(1)}>Next</button>
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
