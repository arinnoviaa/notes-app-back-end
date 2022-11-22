const routes = (handler) => [
  {
    method: 'POST',
    path: '/categories',
    handler: handler.postCategoryHandler,
  },
  {
    method: 'GET',
    path: '/categories',
    handler: handler.getCategoriesHandler,
  },
  {
    method: 'GET',
    path: '/categories/{id}',
    handler: handler.getCategoryByIdHandler,
  },
  {
    method: 'PUT',
    path: '/categories/{id}',
    handler: handler.putCategoryByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/categories/{id}',
    handler: handler.deleteCategoryByIdHandler,
  },
];

module.exports = routes;
