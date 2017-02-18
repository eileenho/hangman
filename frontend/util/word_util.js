export const fetchAllWords = () => (
  $.ajax({
    method: 'GET',
    url: 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words',
  }).then(function(data) {
    return data.split("\n").slice(0,100);
  })

);
