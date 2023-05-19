import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: 'Wafa Slim',
        bio: 'I am 35 years old',
        imgSrc: 'Wafa.png',
        profession: 'Energy Engineer'
      },
      shows:true,
      counter:0
    };  
    } 

    handleShowPerson = () => {
      this.setState({
  //toggle the value of shows state such as showing or hiding the person's profile
        shows: !this.state.shows
      });
  };
  // the setInterval method shows the time interval since the last component was mounted 
  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)//It executes repeatedly every 1000 milliseconds (1 second)
  }


  render() {
 
    return (
      <div className='App'>
        { this.state.shows && /*This conditional rendering checks the value of 'this.state.shows' If it is true,
         the code inside the following parentheses will be rendered. If it is false, the code will be skipped*/
        (<div style={{fontSize:'medium',fontwight:'normal',fontFamily:'Arial, sans-serif'}}> 
            <h1 style={{fontSize:'medium',fontwight:'normal'}}>{this.state.person.fullName}</h1> 
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt='' className='img'/>
        </div>)
        }
        <br></br>
        {/* When the button is clicked, it calls the 'this.handleShowPerson()' method*/}
        <button onClick={()=>this.handleShowPerson()} className='btn'>Click me</button>
        <p>{this.state.counter}</p>
     </div>
    );
    }}
    export default App;








