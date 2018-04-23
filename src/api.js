import AppSettings from './appSettings.json';

const host = AppSettings['backend-url'];
const booksPath = '/api/books';
const genresPath = '/api/genres';
const bookInstancesPath = '/api/bookinstances';
const contentType = 'application/json';

export const fetchGenres = () => {
  return fetch(host + genresPath, {
    method: 'GET',
    headers: {
      'Content-Type': contentType
    }
  });
};

export const fetchBooks = () => {
  return fetch(host + booksPath, {
    method: 'GET',
    headers: {
      'Content-Type': contentType
    }
  });
};

export const fetchBookInstances = () => {
  return fetch(host + bookInstancesPath, {
    method: 'GET',
    headers: {
      'Content-Type': contentType
    }
  });
};
