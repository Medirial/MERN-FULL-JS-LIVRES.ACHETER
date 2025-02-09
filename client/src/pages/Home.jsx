import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get('{URl}/allbooks');
        setBooks(res.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des livres :', error);
        setBooks([]); // Mettre à jour les livres en cas d'erreur
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  console.log('Objet des livres :', books);

  return (
    <div className='p-6 bg-gray-50'>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold text-indigo-700'>Liste des Livres</h1>
        <Link to='/create'>
          <button className='flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300'>
            <MdOutlineAddBox className='text-xl mr-2' />
            Ajouter un Livre
          </button>
        </Link>
      </header>

      <div className='mt-6 flex justify-center items-center gap-x-6'>
        <button
          className={`${
            showType === 'table' ? 'bg-indigo-600' : 'bg-indigo-300 hover:bg-indigo-500'
          } px-6 py-2 rounded-lg text-white font-medium transition duration-300`}
          onClick={() => setShowType('table')}
        >
          Vue Tableau
        </button>
        <button
          className={`${
            showType === 'card' ? 'bg-indigo-600' : 'bg-indigo-300 hover:bg-indigo-500'
          } px-6 py-2 rounded-lg text-white font-medium transition duration-300`}
          onClick={() => setShowType('card')}
        >
          Vue Carte
        </button>
      </div>

      {loading ? <Spinner /> : showType === 'card' ? <BooksCard books={books} /> : <BooksTable books={books} />}
    </div>
  );
};

export default Home;
