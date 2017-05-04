import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import PageType from '../types/PageType';

const url = 'http://dev.andiawesome.com/graphql';

let pages = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new List(PageType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            pages = data.pages;
          }

          return pages;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (pages.length) {
        return pages;
      }

      return lastFetchTask;
    }

    return pages;
  },
};

export default news;
