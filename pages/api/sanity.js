import dotenv from 'dotenv'
import sanityClient from '../../libs/sanityClient'
dotenv.config({silent: true});

export default async(req, res) => {
  var query = req.body.query;
  var response = await sanityClient.fetch(query)
  res.send(JSON.stringify(response));
};