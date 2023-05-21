import React, { Component } from 'react';
import './App.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';



class App extends Component {
  constructor() {
    super();
    // Setting up state
    this.state = {
      person: {
        fullName: 'Wafa Slim',
        bio: 'Graduated from the National School of Engineering of Monastir',
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
        
    (<div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ height: 200,backgroundColor:'black' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150' }}>
                  <MDBCardImage src={this.state.person.imgSrc} alt='' className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: 1 }} />
                  <MDBBtn className="prof" outline color="dark" style={{height: '36px', overflow: 'visible',marginLeft:15}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3">
                  <MDBTypography tag="h5">Based in</MDBTypography>
                  <MDBCardText>Tunisia</MDBCardText>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{this.state.person.fullName}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">{this.state.person.bio}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">{this.state.person.profession}</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>)
  }
        {/* When the button is clicked, it calls the 'this.handleShowPerson()' method*/}
        <button onClick={()=>this.handleShowPerson()} className='btn'>Hide profile</button>
        <p>{this.state.counter}</p>
     </div>
    );
    }}
    export default App;








