var params = new Proxy(new URLSearchParams(window.location.search), {
  // make params.target return the original target object
  get: (searchParams, prop) =>
    prop === 'target' ? searchParams : searchParams.get(prop),
  set: (searchParams, prop, value) => {
    if (value != null) searchParams.set(prop, value);
    else {
      searchParams.delete(prop);
      window.history.replaceState(
        {},
        '',
        decodeURIComponent(`${window.location.pathname}?${searchParams}`)
      );
    }
  },
});

console.log(params);
