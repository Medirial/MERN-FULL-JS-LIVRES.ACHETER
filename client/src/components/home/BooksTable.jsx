import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksTable = ({ books }) => {
  return (
    <>
      <table className='table-auto w-full'>
        <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <tr>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg'>No</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg'>Title</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg max-md:hidden'>Genre</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg max-md:hidden'>Author</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg'>Year</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg max-md:hidden'>Pages</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg max-md:hidden'>Publisher</th>
            <th className='px-6 py-3 border border-slate-300 rounded-lg text-lg'>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {books.map((book, index) => (
            <tr key={book._id} className='hover:bg-gray-100'>
              <td className='border text-green-600 px-6 py-4 text-sm'>{index + 1}</td>
              <td className='border text-green-600 px-6 py-4 text-sm'>{book.title}</td>
              <td className='border text-green-600 px-6 py-4 text-sm max-md:hidden'>{book.genre}</td>
              <td className='border text-green-600 px-6 py-4 text-sm max-md:hidden'>{book.author}</td>
              <td className='border text-green-600 px-6 py-4 text-sm'>{book.year}</td>
              <td className='border text-green-600 px-6 py-4 text-sm max-md:hidden'>{book.pages}</td>
              <td className='border text-green-600 px-6 py-4 text-sm max-md:hidden'>{book.publisher}</td>
              <td className='border text-green-600 px-6 py-4 flex space-x-4 justify-center'>
                <Link to={`/update/${book._id}`} className='text-2xl text-blue-600 hover:text-blue-700'>
                  <AiOutlineEdit />
                </Link>
                <Link to={`/book/${book._id}`} className='text-2xl text-yellow-600 hover:text-yellow-700'>
                  <FaInfoCircle />
                </Link>
                <Link to={`/delete/${book._id}`} className='text-2xl text-red-600 hover:text-red-700'>
                  <MdOutlineDelete />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
