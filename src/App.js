import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ButtonGroup, Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { FaChartLine } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import { BsArrowsMove,BsX, BsGraphUp ,BsList} from "react-icons/bs";
import { AiOutlineSliders} from "react-icons/ai";
import Charts from "./Charts";
import Table from 'react-bootstrap/Table';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';





  

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          {/* Card Header */}
          <div className="card__header" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card_header__left" style={{ color: 'green', display: 'flex', flexDirection: 'column' }}>
            <BsInfoCircleFill  className="header__icons"  />
            <FaChartLine className="header__icons mt-2" />
           
            </div>
              <div className="card_header__center" style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <img className="logo" src="https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png" 
              alt="logo" style={{marginLeft:'105px'}} /> 

              </div>
            <div className="card_header__right">
            <BsArrowsMove className="header__icons me-3"   />
              <BsX className="header__icons"  /> 
            </div>
          </div>
          {/* Card Title */}
          <Card.Title className="text-center" style={{ fontSize: '1rem' }}>Solana (SOL)</Card.Title>
          {/* Card Price */}
          <Card.Title className="text-center" style={{ fontSize: '2rem' }}>$64.92</Card.Title>
          {/* Card Percentage */}
          <Card.Text className="text-center text-danger fs-5">-0.9%</Card.Text>
          {/* Card Table */}
          <div className="d-flex justify-content-center">
            <table  className="mb-2">
              <thead className="">
                <tr >
                  <td   scope="col">MARKET CAP: </td>
                  <td scope="col">$20,143,754,134</td>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td scope="row">24H HIGH:</td>
                  <td>$74.08</td>
                </tr>
                <tr>
                  <td scope="row">24H LOW:</td>
                  <td>$61.21</td>
                </tr>
                <tr>
                  <td scope="row">24H VOL:</td>
                  <td>$4,434,749,300</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Option Buttons */}
          
        
          <ButtonGroup    aria-label="Button Group" className="float-Center" style={{marginLeft:'45px'}}>
            <Button className="px-2" variant="outline-secondary">24h</Button>
            <Button className="px-2.5" variant="outline-secondary">7d</Button>
            <Button className="px-2" variant="outline-secondary">14d</Button>
            <Button className="px-2" variant="outline-secondary">30d</Button>
            <Button className="px-2" variant="outline-secondary">90d</Button>
            <Button className="px-2" variant="outline-secondary">Max</Button>
          </ButtonGroup>
         
          
          

          {/* Card Button */}
          <Card.Text className="mt-5">
          <div className="card_header__right">

          <Button className="px-1" variant="outline-secondary" size="sm" style={{float: 'right'}} >
             < BsGraphUp  className="header__icons me-2"  />
             </Button>

          <Button  className="px-1" variant="outline-secondary" size="sm" style={{float: 'right'}}>
             < AiOutlineSliders className="header__icons me-2"   /> </Button>


             
          </div>
          <br />
          <br />


          <div className="card_header__right" style={{float: 'right'}} >
            
          <Button variant="light" size="sm" > Logarithmic </Button>
          
          <Button variant="light" size="sm" > Linear </Button>

          <Button  size="sm" className="px-1" variant="light"   >
            <BsList  className="header__icons me-3" />
            </Button>

            
          </div>
           
        


          </Card.Text>
          <br /><br />

      

          <div style={{marginLeft:'-35px'}}>
          
          <Charts   />
          </div>    

          
          
        {/*checked button  */}
        <Form style={{marginLeft:'50px'}}>
  {['checkbox', ].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Main"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="BTC"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
       <Form.Check
        inline
        label="ETH"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    
    </div>
  ))}

<div> <DatePickerComponent id="datepicker" placeholder="Enter date"/>;</div>


</Form>



        <div>
        <Table striped bordered hover  >
  <thead>
    <tr >
      
      <td>7d</td>
      <td>14d</td>
      <td>30d</td>
      <td>1y</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>14.1%</td>
      <td>83.4%</td>
      <td>148.6%</td>
      <td>2034.3%</td>
    </tr>
    </tbody>
 </Table>
        </div>
        
        </Card.Body>
        
       
      </Card>
    </div>
  );
}

export default App;
