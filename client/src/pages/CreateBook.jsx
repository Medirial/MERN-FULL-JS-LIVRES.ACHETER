import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';

const CreerLivre = () => {
  const [titre, setTitre] = useState('');
  const [genre, setGenre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [annee, setAnnee] = useState('');
  const [pages, setPages] = useState('');
  const [editeur, setEditeur] = useState('');
  const [chargement, setChargement] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChargement(true);
    try {
      await axios.post('{URl}/create', {
        title: titre,
        genre,
        author: auteur,
        year: annee,
        pages,
        publisher: editeur,
      });
      enqueueSnackbar('Livre créé avec succès', { variant: 'success' });
      navigate('/');
    } catch (error) {
      enqueueSnackbar('Erreur lors de la création du livre', { variant: 'error' });
      console.error('Erreur lors de la soumission du formulaire :', error);
    } finally {
      setChargement(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <BackButton />
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Créer un Nouveau Livre</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[['Titre', titre, setTitre], ['Genre', genre, setGenre], ['Auteur', auteur, setAuteur], ['Année de publication', annee, setAnnee], ['Nombre de pages', pages, setPages], ['Éditeur', editeur, setEditeur]].map(([label, value, setter], index) => (
            <div key={index}>
              <label className="block text-gray-700 font-medium">{label}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
              disabled={chargement}
            >
              {chargement ? 'Création en cours...' : 'Créer le livre'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreerLivre;
