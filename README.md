# PcPeripherals-Project
This project was made as part of my training at PeopleCert Education Coding Bootcamp.

It is a fully functional dynamic e-commerce website that shells computer peripherals. 
Technologies implemented: 
 -Python, 
 -Django, 
 -REST API, 
 -SQLite3, 
 -Bootstrap, 
 -Javascript, 
 -HTML, 
 -CSS. 
 Contains chat with auto response.

Our purpose was to build a simple yet fully functional website tha emphasizes on the user experience, without lacking any functionality.

Combining Django features and Javascript we achieved building a website that deploys 3 roles: guest user, registered user and admin.
Users can add/edit/delete items from their cart and make a complete order. This is done by implementing paypal code and paypal sandbox accounts.
Guest users cart are implemented using browser cookies, that is because they are not registered in our database.
Registered users cart functionality takes advantage of Django's ORM and uses the database.

This project was a real challenge for me and my team, since we have to use all of our Django knowledge with addition of Pythonic logic to solve problems and functionality of Javascript in order our site to be dynamic and responsive.

Packages used:
- django-crispy-forms
- pillow
- djangorestframework
- markdown       
- django-filter
- requests

In order to run the program:
 1) Open the folder in cmd
 2) Activate the virtual environment (env\scripts\activate)
 3) Locate manage.py in GroupProject and run "python manage.py runserver"
 4) The main page url end in: /pcp/home/
