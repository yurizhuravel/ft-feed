const express = require('express');
const request = require('request-promise');
const router = express.Router(); // eslint-disable-line

const FT_HL_KEY = process.env.FT_HL_KEY; // eslint-disable-line
const apiUrl = "http://api.ft.com/content/search/v1?apiKey=" + FT_HL_KEY;

router.get('/search', (req,res) => {

  let fetchSearch = {
    url: apiUrl,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
      "queryString" : req.query.q,
      "queryContext" : {
        "curations" : [ "ARTICLES"]
      },
      "resultContext" : {
    		 "aspects" :[ "title","lifecycle","location","summary","editorial" ]
    	}
    },
    json: true
  };

  request(fetchSearch)
  .then(function (response) {
    let articles = response.results[0].results;

    res.render('index',
     { title: 'FT Feed',
      articles : articles} );
  })
  .catch(function (err) {
    console.log(err);
  });
});

module.exports = router;
