import React,{useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'




const initialState = {filmName:'',rating:0,panIndia:'',adultContent:''}


const FilmComponent = () => {

  const [rows,setRows] = useState([]);
  const [formValues,setFormValues] = useState(initialState);

  //Function to handle the changes happens in the input boxes
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value})
  }

  //Function to handle when user submit the form.
  const submitHandler = (e) => {
    e.preventDefault();
    if(!formValues.filmName || !formValues.rating || !formValues.adultContent || !formValues.panIndia){
      return console.log("Missing Fields")
    }
    rows.push(formValues)
    setFormValues(initialState)
  }
  
  //Function to handle when user clicks the delete button.
  const deleteButtonHandler = (e,id) => {
    const newRows = [...rows]
    const index = rows.findIndex((row) => row.id === id );
    newRows.splice(index,1);
    setRows(newRows)
    
  }
  
  return (
    <div>
     <form  onSubmit={submitHandler}>
      <input type='text' name='filmName' placeholder='Film Name' value={formValues.filmName} onChange={handleChange}/>
      <input type='number' name='rating' placeholder='Rating' value={formValues.rating} onChange={handleChange}/>
      <input type='text' name='panIndia' placeholder='Pan India' value={formValues.panIndia} onChange={handleChange}/>
      <input type='text' name='adultContent' placeholder='Adult Content' value={formValues.adultContent} onChange={handleChange}/>
      <button type='submit' >Add Film</button>
    </form>
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Film Name</TableCell>
            <TableCell align="right">Review</TableCell>
            <TableCell align="right">Pan India</TableCell>
            <TableCell align="right">18+</TableCell>
            <TableCell align="right">Delete Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.filmName}
              </TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.panIndia}</TableCell>
              <TableCell align="right">{row.adultContent}</TableCell>
              <TableCell align="right"><Button variant="outlined" onClick={(e) => deleteButtonHandler(e,id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default FilmComponent