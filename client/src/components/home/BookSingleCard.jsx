import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-600 rounded-lg px-5 py-3 m-5 relative hover:shadow-2xl hover:border-indigo-400'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg'>
        {book.year}
      </h2>
      <h4 className='my-2 text-gray-600'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-3'>
        <PiBookOpenTextLight className='text-pink-500 text-2xl' />
        <h2 className='my-1 text-gray-700'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-3'>
        <BiUserCircle className='text-blue-500 text-2xl' />
        <h2 className='my-1 text-gray-700'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-3 mt-4 p-4'>
        <BiShow
          className='text-3xl text-green-700 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/book/${book._id}`}>
          <BsInfoCircle className='text-2xl text-teal-600 hover:text-black' />
        </Link>
        <Link to={`/update/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-black' />
        </Link>
        <Link to={`/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-500 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;