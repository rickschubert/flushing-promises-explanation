import React from "react"

export async function makeNetworkRequest() {
    const response = await fetch("http://localhost:3001/what-day-is-it")
    const data = await response.json()
    return JSON.stringify(data)
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            webResponse: "Empty",
        }
    }

    async componentDidMount() {
        const webResponse = await makeNetworkRequest()
        this.setState({webResponse})
    }

    render() {
        return (
            <div className="App">
                <div className="response">{this.state.webResponse}</div>
            </div>
        )
    }
}

export default App
