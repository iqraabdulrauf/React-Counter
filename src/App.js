import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      counters : [
          {id :1 , value :0},
          {id :2 , value :0},
          {id :3 , value :0},
          {id :4 , value :0}
      ]
    };
  
    this.totalCounts = this.totalCounts.bind(this);
  }
 
   handleIncrement = counter => {
       const counters = [...this.state.counters];
       const index = counters.indexOf(counter);
       counters[index]= {...counter};
       counters[index].value++;
       this.setState({counters});
   }
   handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value--;
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

   totalCounts ( counter ) 
   {
      let count=0;
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]= {...counter};
      for(let i=0;i<counters.length;i++)
      count+=counters[i].value;
      return count ;
    }
    
  //  testloop (count){
  //   let n=[];
  //     for(let i=0;i<count;i++){
  //     n.push(<Navbar  
  //      totalCounterActive={this.state.counters.filter(c => c.value > 0).length }
  //      ontotalCounts={this.totalCounts }      
  //      >
  //      </Navbar>)
       
  //     }
  //    return n; 
     
  //  }
  render() {
    return (
      <React.Fragment>
        <Navbar  
        
       totalCounterActive={this.state.counters.filter(c => c.value > 0).length }
       ontotalCounts={this.totalCounts(this.state.counters.id)}      
       >
       </Navbar>
        
     {/* {this.testloop(this.state.counters[0].value)} */}
      <main className="container">
      <Counters  
      counters={this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}

      />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
