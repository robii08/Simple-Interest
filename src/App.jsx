
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  
  const validate = (e) =>
  {
    const name = e.target.name
    const value = e.target.value
    console.log(name,value);
    if(!!value.match(/^[0-9]*$/))
    {
      if(name=='principle')
      {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate')
      {
        setRate(value)
        setIsRate(true)
      }
      else
      {
        setYear(value)
        setIsYear(true)
      }
    }
    else
    {
      if(name=='principle')
        {
          setPrinciple(value)
          setIsPrinciple(false)
        }
        else if(name=='rate')
        {
          setRate(value)
          setIsRate(false)
        }
        else
        {
          setYear(value)
          setIsYear(false)
        }
    }
  }

  const reset=()=>
  {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  const calculate=(e)=>
  {
    e.preventDefault()
    if(principle=='' || rate=='' || year=='')
    {
      alert('please fill the form completely')
    }
    else
    {
      setInterest((principle*rate*year)/100)
    }
  }
  

  return (
    <>
      <div className='row' style={{backgroundColor:'black',height:'100vh'}}>
        <div className="col-4"></div>
        <div className="col-md-4 col-lg-4 text-dark  bg-light pt-4 px-5 my-4 rounded-3" >
          <h1 className='fw-bolder text-center'>Simple Interest App</h1>
          <p className='text-center'>calculate your simple interest easily</p>
          <div className='text-center bg-success mx-2 mt-5 mb-5 py-4 rounded-2'>  
            <h1 className='fw-bold'>₹{interest}</h1>
            <p>Total Simple Interest</p>
          </div>
         <form onSubmit={calculate}>
            <div className='mx-2' >
              <TextField id="outlined-basic" className="form-control my-2" value={principle || ''} label="₹Principle Amount" variant="outlined" onChange={(e)=>validate(e)} name='principle'/>
              {!isPrinciple && <p className='text-danger'>*invalid input</p>}
              <TextField id="outlined-basic" className="form-control my-2" value={rate || ''} label="Rate of Interest (p.a)%" variant="outlined" onChange={(e)=>validate(e)} name='rate' />
              {!isRate && <p className='text-danger'>*invalid input</p>}
              <TextField id="outlined-basic" className="form-control mt-2 " value={year || ''} label="Year(yr)" variant="outlined" onChange={(e)=>validate(e)} name='year' />
              {!isYear && <p className='text-danger'>*invalid input</p>}
              
            </div>
            <div className='mx-2 d-grid gap-2 mb-4 mt-5'>
              <Button className="btn btn-success py-3" variant="contained" type='submit' color='warning' disabled={!isPrinciple || !isRate || !isYear}>calculate</Button>
              <Button className="btn btn-danger py-3" variant="contained" onClick={reset}>reset</Button>
              
            </div>
         </form>
        </div>
        <div className="col-4"></div>

      </div>
    </>
  )
}

export default App
