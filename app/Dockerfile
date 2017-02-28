FROM php:7.1-apache
MAINTAINER hello@cpiccinino.com

WORKDIR /opt
RUN apt-get update && apt-get install --no-install-recommends -y  \
    git  \
    vim \
    zlib1g-dev  \
    libgmp10  \
    libgmp-dev  \
  &&  docker-php-ext-install -j$(nproc)  \
    pdo_mysql  \
    bcmath  \
    gmp  \
    zip  \
  &&  a2enmod rewrite  \
  &&  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer  \
  &&  composer global require "laravel/installer"

# Update Apache
COPY  config/000-default.conf /etc/apache2/sites-available
COPY  html /var/www/html
# RUN   chown -R www-data:www-data /var/www/html
#
# USER  www-data
# WORKDIR /var/www/html
# ENV  HOME=/var/www/html
# ENV  PATH=/opt/.composer/vendor/bin:${PATH}

# Add sample products.
# RUN  php artisan make:seeder Products
