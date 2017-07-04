[![Build Status](https://travis-ci.org/a12k/ultratracker.svg?branch=master)](https://travis-ci.org/a12k/ultratracker)

# ultratracker
tracking spots left in races listed on ultrasignup

Beginnings of a short webapp to help me track how many spots are remaining in various races listed
on UltraSignup.com, so I don't have to click through on many races every time. :p

[Ultratracker on Heroku](https://ultratracker.herokuapp.com/)

```
git clone https://github.com/a12k/ultratracker.git

cd ultratracker

npm install

npm start

go to: localhost:3000

```
When running locally, POST request to: 

```
localhost:3000/api/v0/:uid

```

where `:uid` is a race ID will return API data in json format. 
