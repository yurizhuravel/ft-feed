#Financial Times Feed

An app to show latest Financial Times headlines by querying [FT API](https://developer.ft.com/docs/license_quick_start/headlinelicense).

At the moment the app shows 100 newest FT articles (API's default), and also provides a search facility.

In order to run this app you will need to [register with FT](https://developer.ft.com/) and get the API key.

### Installing and running

In order to run this app you will need to [register with FT](https://developer.ft.com/) and get the API key. After this is done:

- Clone this repository
- Change into its root folder
- Install dependencies by running `npm install`
- Create a file called .env containing your FT Headline API key, like so:
```
FT_HL_KEY=[insert your key]
```
- Build your CSS by runnng `gulp`
- Finally, run `npm start` or `nodemon`

FT headlines should then be available on `http://localhost:3000/`

### Technologies used

- Node
- Express framework
- EJS for templating
- [Origami](http://origami.ft.com/), a proprietary FT's framework for styling
- Gulp

### Next development goals

- Deploy the app to Heroku
- Add pagination, responsive Origami grid support, and o-card styling
- Add local caching to enable offline use
