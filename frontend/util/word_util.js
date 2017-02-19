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
