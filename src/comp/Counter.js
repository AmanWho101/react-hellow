import React, { Component } from 'react'

export class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         Count: 0,
        
      }
    }

    incr(){
        this.setState({
            
            Count:  this.state.Count +1 })
            }

    render() {
    return (
      <div> <h1>{this.state.Count}</h1>
    
          <button onClick={() => {
              this.incr()
          }}>Count</button>
      </div>
    )
  }
}



export default Counter