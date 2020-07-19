// Obtain the root
const rootElement = document.getElementById('root')



// Create a function to wrap up your component
function App() {
    return (
        <div>
            <Main/>
        </div>
    );
}


// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <App/>,
    rootElement
)
