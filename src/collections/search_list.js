import Backbone from 'backbone';

import Search from '../models/search';

const SearchList = Backbone.Collection.extend({
  model: Search,
  url: 'http://localhost:3000/movies?query=',
  comparator: 'title',
  addTitle(title) {
    return this.url += title
  },
  resetUrl() {
    this.url = 'http://localhost:3000/movies?query=';
  },
  //  if (this.get('query')) {
  //   `http://localhost:3000/movies?query=${this.get('query')}`
  //   else {
  //     'http://localhost:3000/movies?query='
  //   }
  // },

  // }') `http://localhost:3000/movies?query=${this.get('query')}`,
  // // url: 'http://localhost:3000/movies',
  // // urlR: function() {
  // //   return `http://localhost:3000/movies?query=${this.get('query')}`
  // // },

  validate(attributes) {
  },

});


export default SearchList;
