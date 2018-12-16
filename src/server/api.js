import express from 'express';
import axios from 'axios';
import CircularJSON from 'circular-json';

const router = express.Router();


const instagramProfile = (req, res) => {
  axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2164039005.49def82.d77d63458ae648b880b162c7699fd9cd&count=10')
    .then(e => res.send(CircularJSON.stringify(e)));
};

router.get('/instagramProfile', instagramProfile);

module.exports = router;
