export const fetchRandomWord = () => {
  // debugger;
  return $.ajax({
    method: 'GET',
    url: 'api/words/random.json'
  });
}
;
