import {useState} from 'react'
import Form from "./Form";
import DisplayRecords from './DisplayRecords';


function Books() {
    const [book] = useState({title: "", author:"" }); 
  const [books, setBooks] = useState([{
    title: 'my favourite plent',
    author: "Kagiso"
  },
  {
    title: "skull bone",
    author: "Sbu"
  }
])


const addBook = (book) => {
  console.log(book)  
  setBooks([...books, book])
}

const deleteBook = (book , index) => {
  console.log(book)
  const filteredList = books.filter((book, bookIndex) => bookIndex != index);
  console.log(filteredList)
  setBooks(filteredList)
}


  return (
      <div className="Books">
        <h1> Books </h1>
      < Form record={book} addRecord={addBook}/>
      <DisplayRecords deleteRecord={deleteBook} records={books} />
    </div>
  );
}

export default Books;
