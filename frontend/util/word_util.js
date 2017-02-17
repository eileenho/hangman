export const fetchAllWords = () => (
  $.ajax({
    method: 'GET',
    url: 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words',
  })
);
