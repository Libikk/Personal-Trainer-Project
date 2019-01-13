import express from 'express';
import axios from 'axios';
import CircularJSON from 'circular-json';
import DomParser from 'dom-parser';

const parser = new DomParser();
const router = express.Router();

const instagramPostDetails = (req, res) => {
  axios.get(`https://www.instagram.com/p/${req.params.mediaId}/`).then((e) => {
    const document = parser.parseFromString(e.data);
    const data = document.getElementsByTagName('script')[3].innerHTML;
    res.send(JSON.parse(data));
  });
};

const instagramProfile = (req, res) => {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&count=10`)
    .then(e => res.send(CircularJSON.stringify(e.data)));
};

router.get('/instagramProfile', instagramProfile);
router.get('/instagramPostDetails/:mediaId', instagramPostDetails);

module.exports = router;