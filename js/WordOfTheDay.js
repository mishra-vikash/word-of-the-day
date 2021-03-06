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
        }
        else if (this.state.current + factor < this.state.startIndex  || this.state.current + factor < 0) {
            current = this.state.endIndex > this.state.words.length - 1 ? this.state.words.length - 1 : this.state.endIndex;
        }else {
            current = this.state.current + factor;
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
        </div>)
    }
}
