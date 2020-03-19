import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios
  .get(url)
  .then(function(response) {
    interface Article {
      id: number;
      title: string;
      discription: string;
    }
    let data: Article[];
    data = [
      {
        id: 1,
        title: 'ss',
        discription: 'aa'
      }
    ];
    console.log(data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });
