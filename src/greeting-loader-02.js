import React, {Component} from 'react'
import {loadGreeting} from './utils'

class GreetingLoader extends Component {
  inputRef = React.createRef()
  state = {greeting: ''}
  loadGreetingForInput = async () => {
    const {data} = await loadGreeting(this.inputRef.current.value)
    this.setState({greeting: data.greeting})
  }
  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" ref={this.inputRef} />
        <button onClick={this.loadGreetingForInput}>Load Greeting</button>
        <div data-testid="greeting">{this.state.greeting}</div>
      </div>
    )
  }
}

export {GreetingLoader}
