import React from 'react'
import Gameboard from './Gameboard';

class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            count: 10
        }
    }

    render () {
        const {count} = this.state
        return(
            <div>
                <h1>{count}</h1>
            </div>
        )
    }
    componentDidMount () {
        const {startCount} = this.props
        this.setState({
            count:startCount
        })
        this.myInterval = setInterval( () => {
            this.setState(prevState => ({
                count: prevState.count -1
            }))
        }, 1000)
    }
}

export default Timer