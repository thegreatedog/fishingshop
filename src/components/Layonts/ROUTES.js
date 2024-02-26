const ROUTES = {
  main: '/',
  spining: '/spining',
  carp: '/carp',
  feeder: '/feeder',
  basket: '/basket',
  item: (mainLink, id = ':itemId') => `${mainLink}/${id}`,
};

export default ROUTES;
