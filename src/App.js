import { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import CreateBook from './CreateBook';
import { CSVLink } from "react-csv";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLoading, data: bookDetail, refetch } = useQuery('bookDetail', () =>
    fetch('https://infinite-springs-80402.herokuapp.com/bookDetail').then(res =>
      res.json()
    )
  )
  if (isLoading) {
    return <div className='mt-32 flex justify-center'><button class="btn btn-square loading"></button></div>
  }
  const deleteBook = (id) => {
    const confirmDelete = window.confirm('are you sure to delete it');
    if (confirmDelete) {
      fetch(`https://infinite-springs-80402.herokuapp.com/deleteBook/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          refetch()
          console.log(data)
        })
    }
  }
  const headers = [
    { label: 'Book Creator Name', key: 'bookCreatorName' },
    { label: 'Book Name', key: 'bookName' },
    { label: 'Book Create Year', key: 'bookCreateYear' },
    { label: 'Publish Date', key: 'publishDate' },
    { label: 'Book Page', key: 'bookPage' },
    { label: 'Book Part', key: 'bookPart' },
    { label: 'Book Topic', key: 'bookTopic' },
    { label: 'Time Spend', key: 'timeSpend' },
    { label: 'Book Price', key: 'bookPrice' },
  ]
  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: bookDetail
  }
  return (
    <div className='w-3/4 mx-auto mt-12 '>
      <label for="createBook" >
        <p onClick={() => setModalOpen(true)} className='text-xl mb-2  text-blue-500 font-semibold text-end'><span className='bg-blue-100 rounded-md p-1 '><span className='text-3xl '>+</span> Add Book Detail </span></p>
      </label>
      {
        modalOpen && <CreateBook refetch={refetch} />
      }
      <table className='w-full p-8 border-2 border-black'>
        <tr className='border-2 border-black'>
          <th className='border border-black'>Book Creator Name</th>
          <th className='border border-black'>Book Name</th>
          <th className='border border-black'>Book Create year</th>
          <th className='border border-black'>Book Publish Date</th>
          <th className='border border-black'>Book Page</th>
          <th className='border border-black'>Book Part</th>
          <th className='border border-black'>Book Topic</th>
          <th className='border border-black'>Time Spend</th>
          <th className='border border-black'>Book Price</th>
          <th className='border border-black'>Delete</th>
        </tr>
        {
          bookDetail.map(book => <tr className='border border-black'>
            <td className='border border-black'>{book.bookCreatorName}</td>
            <td className='border border-black'>{book.bookName}</td>
            <td className='border border-black'>{book.bookCreateYear}</td>
            <td className='border border-black'>{book.publishDate}</td>
            <td className='border border-black'>{book.bookPage}</td>
            <td className='border border-black'>{book.bookPart}</td>
            <td className='border border-black'>{book.bookTopic}</td>
            <td className='border border-black'>{book.timeSpend}</td>
            <td className='border border-black'>{book.bookPrice}$</td>
            <td onClick={() => deleteBook(book._id)} className='border border-black'>Delete</td>
          </tr>)
        }

      </table>
      <div className='mt-4'>
        <CSVLink className='border  py-2 px-6 bg-gradient-to-t from-gray-200 to-gray-100 rounded-md font-semibold'  {...csvReport}>Generate</CSVLink>
      </div>
    </div>
  );
}

export default App;
