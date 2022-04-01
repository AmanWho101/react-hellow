import React, { Component } from 'react'

export class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         Count: 0,
        
      }
    }

    incr(){
        // this.setState({
            
        //     Count:  this.state.Count +1 })

        this.setState(prevState => ({
          Count: prevState.Count + 1
        }))
            }
    incr5(){
      let i = 0;
      while(i<10){
        this.incr();
        i++;
      }
    }

    render() {
    return (
      <div> <h1 >{this.state.Count}</h1>
    
          <button onClick={() => {
              this.incr5()
          }}>Count</button>
      </div>
    )
  }
}



export default Counter