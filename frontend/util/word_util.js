export const fetchRandomWord = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/words/random.json'
  });
};

export const fetchLeveledWord = level => {
  return $.ajax({
    method: 'GET',
    url: `api/words/leveled/${level}.json`
  });
};

export const createWord = word => {
  return $.ajax({
    method: 'POST',
    url: 'api/words',
    data: { word }
  });
};
