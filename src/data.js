function getData(query) {
  const url = '/graphql';
  const body = JSON.stringify({ query });
  const method = 'POST';
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  return fetch(url, { method, body, headers }).then(resp => resp.json());
}

export default getData;
