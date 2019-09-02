import { createClient } from 'contentful';

export default createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN
});