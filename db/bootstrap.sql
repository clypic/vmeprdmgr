USE laravel;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  description TEXT NOT NULL,
  price FLOAT(24,3) NOT NULL,
  created DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products (name, description, price) VALUES ('product1', 'Sample product 1', 1.0);
INSERT INTO products (name, description, price) VALUES ('product2', 'Sample product 2', 1000.0);
INSERT INTO products (name, description, price) VALUES ('product3', 'Sample product 3', 1000000.0);
SELECT * FROM products
