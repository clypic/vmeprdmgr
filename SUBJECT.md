# Technical Test

The goal of this test is to evaluate your ability by building a small app for Products maintanance.

## Instructions

The app is composed by 2 parts:

 - the backend: building an API for products
 - and the frontend: a crud page for the products that make use of the backend API.

You can either choose to build the frontend, backend or both, depending of what you feel more comfortable with and are you expecting to do at this position.

### Backend

Using the PHP framework of your choice (Laravel or Symfony are preffered, but not exclusive - even plain php is accepted), build a small products API.

A product **should** have the following properties:

- ID
- Name (string)
- Description (text)
- Price (integer, in cents)
- Created At Date

The app needs to implement the following endpoints:

  - `GET /api/products` => Paginated list of products. You can assume that "page" and "limit" query params are  used for pagination.
  - `POST /api/products` => Create a new product. Name, Description and price are required fields.
  - `PUT /api/products/:id` => Update a product. You can update either the name, description or price.
  - `DELETE /api/products/:id` => Delete an a product

Products must be stored in a mysql database.

### Frontend

Build a nice looking CRUD page in order to mantain the products, using all the tools you think are appropiate for this task. Vue.js is our suggested option, but any other JS framework could be used.

If you're just building the frontend, you can use the following URL:

http://technicaltest.vme.co/api/

The endpoints are the same as the ones defined in the "BACKEND" section. Note that all content in PUT / POST methods is expected in JSON as part of the request's body.

### Full Stack Position

For those with expertise in both PHP and JS, you can build the entire application by yourself, that is, write the frontend as well as the backend, always respecting the guidelines in the previous sections.

## Evaluation Criteria

Please push your code to a public GitHub repository. We'll evaluate, where it applies:

- the quality of the code,
- the framework chosen / use of suggested tools,
- and the UI & UX of the app.

Good luck!