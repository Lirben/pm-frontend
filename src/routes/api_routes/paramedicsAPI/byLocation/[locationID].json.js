import {getByTopLocation} from '../../../../mobielServices/paramedicService';

export async function get(req, res, next) {
    try {
        const {locationID} = req.params;
        const result = await getByTopLocation(locationID);
  
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));      
    } catch (error) {
      res.end(JSON.stringify({ error: error.message }));
    }
}