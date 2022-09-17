const apiKey = "d03799692be1c26faf0ade18a4205f9f";

export const originals = `trending/all/week?api_key=${apiKey}&language=en-US`;

export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;

export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;
