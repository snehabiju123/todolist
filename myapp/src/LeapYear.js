import {useState} from 'react'

export default function IsLeapYear()
{

    const [year,setyear]=useState('');
    const [result,setresult]=useState('');

    const HandleInputChange=(event)=>{
        setyear(event.target.value);
};
const check_leapyear = ()=>
{   const yr=parseInt(year);
    if(yr%4==0 & yr%100!=0)
    setresult(`${year} is a leap year`);
    else if(yr%400==0)
    setresult(`${yr} is a leap year `);
    else
    setresult(`${yr} is not a leap year `);
};

return(
    <div>
        <label>Enter the year: </label>
        <input type="number" onChange={HandleInputChange}/><br/>
        <button onClick={check_leapyear}>Check</button>
        <p>{result}</p>
    </div>
);
}




