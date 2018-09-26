import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';
class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.totalCounts = this.totalCounts.bind(this);
  // }
  state = { 
    counters : [
        {id :1 , value :0},
        {id :2 , value :0},
        {id :3 , value :0},
        {id :4 , value :0}
    ]

   };

   handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index]= {...counter};
       counters[index].value++;
       this.setState({counters});
   }
   handleReset = () => {
       const counters = this.state.counters.map( c=> {
          c.value = 0;
          return c;
       });
       this.setState({counters}) ;

   };

   handleDelete = counterID => {
     const counters = this.state.counters.filter(c => c.id !== counterID);
     this.setState({counters});
   };
  //  totalCounts = () =>
  //  {
  //    fo
  //  };
  render() {
    return (
      <React.Fragment>
      <Navbar  
      totalCounterActive={this.state.counters.filter(c => c.value > 0).length }
      ontotalCounts={
        this.state.counters[0].value +
        this.state.counters[1].value +
        this.state.counters[2].value +
        this.state.counters[3].value}>
     
      
      </Navbar>
      <main className="container">
      <Counters  
      counters={this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
