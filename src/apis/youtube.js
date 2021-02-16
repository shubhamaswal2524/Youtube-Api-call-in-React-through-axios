import axios from 'axios';

const KEY='add key from youtube api';
// by creating your account on google api you can use youtube api v3
// and there you will get a unique access key.....paste it above...  

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
      part:'snippet',   
      maxResults:5,
      key:KEY
    }
});