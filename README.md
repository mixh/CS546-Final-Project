
Full Stack Dating Website 
Node, Javascript, MongoDB, Express, Handlebars and Bootstrap


HOW TO RUN 
- Run ```npm install```   will install all the required node dependencies 
- Run ```npm run seed```  will populate the database with users which you could use to match and message going ahead
- Run ```npm start```     will run the application the website would be live on  http://localhost:3000

## How to navigate the application
- once live the website would show the features and purpose on the homepage, it would also have links for login and registration
- you could login using the prior seeded database file it has the emails and passwords for login (you could use email = "alicesmith@example.com" and Password="Password1234$") 
- if you want to register a new user you could through "/register" or register buttons available on homepage and login pages
  - keep in mind our application only shows matches which have some commanility like university, place of work, a place you want to visit, gym/class if a new user is registered and the db has no other users that have these commanilities we wont be able to show any potential matches
  - after successful registration you would be redirected to login page to enter the website
 
 
 ### Post successful Login
 - You would be able to see the landing page which would have card links for Find Matches, Your Matches, Your Profile, Messages. In addition the navbar would have the links to logout and delete account 
 
 The Find Matches Card or the navbar potential matches will show you the users who have some common locations as you and you would be able to 
 - you can view the next user only after liking or disliking the user shown 
 - view their profile, like or dislike them
 - you could also set the toggle button in this page to show you the users within 5km radius of your location instead of all the users that share the commonalities
 
 Profile will show you, your profile that is generated from the info entered at registration
- also you are given the button to edit your profile, only the info that is changed will be updated in website unchanged info will be same as the prior entered
  - after successfully editing you would be redirected to the profile page where your new profile would be visible 
- you are also given the option to pause/unpause your profile. You wont be able to view any potential matches if your profile is paused

Messages will give you the option to chat with a matched user. once unmatched by either you would no longer be able to message

Matches will show you all your matches and the option to message your matched user, you could search for the your matched users over here and you could also unmatch the user over here
