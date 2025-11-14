# Fakturera

# Doc:

---

1. Login:
   The UI shall look and function as this URL:
   https://online.123fakturera.se/login/

The texts (English + Swedish) should be pulled from a PGSQL db that you design.

Hamburger menu should work.

For the background image and the logo and the flag, you can link to its storage in the existing solution:
https://storage.123fakturere.no/public/flags/SE.png
https://storage.123fakturere.no/public/flags/GB.png
https://storage.123fakturera.se/public/wallpapers/sverige43.jpg
https://storage.123fakturera.se/public/icons/diamond.png

This URL shall work on both mobile portrait, landscape, tablet and desktop resolutions.

User registration is not needed, but you can create user and password manually.

Authentication shall work, and after login, the user shall be taken to pricelist.
For authentication, you shall use JWT token based authentication.
After login all endpoints in pricelist must use this token for authentication purposes.

Links are dummies.

2. Terms:
   The UI shall look and function as this URL:
   https://online.123fakturera.se/terms/

This URL only needs to work on mobile portrait resolution.

The texts (English + Swedish) should be pulled from a PGSQL db that you design.

3. Pricelist:

It should look as in the pictures.

Here we will ignore almost all functionality, like adding products, deleting.

The design only shows one product line, but please add at least 20 so we can test the scrolling functionality.

The headers should be the same as we use, but feel free to use your own icons.

The data should be pulled from a PGSQL db that you design.

The fields like Product/Service, In Price, Price and so on should be populated with data pulled from backend.

The fields should not be locked – so we should be able to enter test data into them that should save to the db.

This URL shall work on both mobile portrait, landscape, tablet and desktop resolutions.

Tablet, landscape and portrait will not show the same fields as desktop.

(Hamburger menu does not need to work for this URL.)

---

## TODO

[x] - Create init of backend and frontend
[x] - create database connection
[x] - setup project folder structure
[x] - create database models
[ ] - add jwt auth
[ ] - create api endpoints
[ ] - language
[ ] - login
[ ] - pricelist

[ ] - frontend
[ ] - add pages
[ ] - integrate api endpoints
[ ] - add styles
