import React ,{useState} from 'react';
import DatePicker from 'react-datepicker'
import { addDays } from 'date-fns';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  const[selectedDate,setSelectedDate] = useState(new Date())
  var date = "" + selectedDate;
 var d = date.split(" ");
  return (
    <div className="App">
      <h1 className="head">
        Date Picker
      </h1>

      <div className="card">
      <DatePicker className="date"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={addDays(new Date(),-3)}
        maxDate={addDays(new Date(),3)}
        />
        <div >
         <span className="c1">{d[0]}</span> 
         <span className="c2">{d[1]}</span> 
        </div>
        
        <div>
        <span className="c3">{d[2]}</span> 
         <span className="c4">{d[3]}</span> 
        </div>
        
      </div>
        
    </div>
  );
}

export default App;
