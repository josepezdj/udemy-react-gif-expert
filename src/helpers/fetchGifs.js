export const fetchGifs = async (cat) => {

  const apiKey = 'o2nnr7gl4lLuKSL7cmjPFkKFaA29YKAI';
  const url = 'https://api.giphy.com/v1/gifs/search';
  const res   = await fetch(`${ url }?api_key=${ apiKey }&q=${ cat }&limit=10`);
  const { data } = await res.json(); 
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;

};