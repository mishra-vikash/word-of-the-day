/**
 *
 * @returns {*}
 * @constructor
 */

class WordOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.describeAction = this.describeAction.bind(this);
        this.navigate = this.navigate.bind(this);
        this.state = {
            current: this.props.startIndex,
            startIndex: this.props.startIndex,
            endIndex: this.props.endIndex,
            describe: false,
            words: words,
            home: this.props.home
        };
    }

    navigate = (factor) => {

        let current = this.state.current;
        if (this.state.current + factor > this.state.words.length - 1 || this.state.current + factor > this.state.endIndex) {
            current = this.state.startIndex;
        }else if (this.state.current + factor > this.state.words.length - 1 || this.state.current + factor > this.state.endIndex) {
            current = this.state.startIndex;
        }  else if (this.state.current + factor < this.props.startIndex) {
            current = this.state.endIndex;
        } else {
            current = this.state.current + factor
        }
        this.setState({describe: false})
        this.setState({current: current})
    }

    describeAction = () => {
        this.setState({describe: !this.state.describe})
    }

    render() {
        return (<div className="container">
            <Card word={this.state.words[this.state.current].word} type={this.state.words[this.state.current].type}
                  meaning={this.state.words[this.state.current].meaning} describe={this.state.describe}
                  describeAction={this.describeAction} navigate={this.navigate} home={this.state.home}/>
            {/*<div className="shift-right">
                <div className="buttonContainer" style={{"marginBottom": "-1.5em"}}>
                    <i className="fa fa-caret-up btn" aria-hidden="true" onClick={() => this.state.home()}
                       style={{"fontSize": "2em"}}></i>
                </div>
                <div className="buttonContainer" style={{"marginBottom": "-1.5em"}}>
                    <i className="fa fa-caret-left btn" aria-hidden="true" onClick={() => this.navigate(-1)}
                       style={{"fontSize": "2.5em"}}></i>
                    <i className="fa fa-caret-right btn" aria-hidden="true" onClick={() => this.navigate(1)}
                       style={{"fontSize": "2.5em"}}></i>
                </div>
                <div className="buttonContainer">
                    <i className="fa fa-caret-down btn" aria-hidden="true" onClick={() => this.describeAction()}
                       style={{"fontSize": "2em"}}></i>
                </div>
            </div>*/}
        </div>)
    }
}
