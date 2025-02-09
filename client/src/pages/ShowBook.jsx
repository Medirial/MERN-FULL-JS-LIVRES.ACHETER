import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`{url}/book/${id}`)
      .then((resp) => {
        setBook(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl font-bold text-indigo-600 my-6">Détails du Livre</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          {Object.keys(book).length === 0 ? (
            <p className="text-gray-500 text-xl">Aucune donnée disponible</p>
          ) : (
            <>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Titre :</label>
                <p className="text-xl text-gray-900">{book.data.title}</p>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Genre :</label>
                <p className="text-xl text-gray-900">{book.data.genre}</p>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Auteur :</label>
                <p className="text-xl text-gray-900">{book.data.author}</p>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Année de publication :</label>
                <p className="text-xl text-gray-900">{book.data.year}</p>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Éditeur :</label>
                <p className="text-xl text-gray-900">{book.data.publisher}</p>
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-xl font-semibold">Dernière mise à jour :</label>
                <p className="text-xl text-gray-900">{new Date(book.data.updatedAt).toLocaleString()}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowBook;
