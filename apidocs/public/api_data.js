define({ "api": [
  {
    "type": "post",
    "url": "/api/products",
    "title": "Create a new product.",
    "name": "CreateProduct",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../app/html/routes/web.php",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:id",
    "title": "Delete an a product.",
    "name": "DeleteProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/html/routes/web.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/:id",
    "title": "Get one Product details.",
    "name": "GetProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"exampleProductName\",\n  \"description\": \"Example Product Description\",\n  \"price\": 1.000\n  \"created\": \"2017-02-28 07:38:40\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../app/html/routes/web.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "Paginated list of products.",
    "name": "GetProducts",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../app/html/routes/web.php",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:id",
    "title": "Update a product.",
    "name": "UpdateProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../app/html/routes/web.php",
    "groupTitle": "Product"
  }
] });
