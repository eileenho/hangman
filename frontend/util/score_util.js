export const createScore = score => {
  return $.ajax({
    method: 'POST',
    url: 'api/scores',
    data: { score }
  });
};
