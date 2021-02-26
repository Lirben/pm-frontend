import {getLocationsGEOJSON} from '../../../../../mobielServices/locationService';

export async function get(req, res, next) {
    try {
      const result = await getLocationsGEOJSON();
  
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
      
    } catch (error) {
      res.end(JSON.stringify({ error: error.message }));
    }
}