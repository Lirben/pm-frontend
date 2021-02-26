import {getParamedicByName} from '../../../../mobielServices/paramedicService';

export async function get(req, res, next) {
    try {
        const {fullName} = req.params;
        const result = await getParamedicByName(fullName);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));      
    } catch (error) {
        res.end(JSON.stringify({ error: error.message }));
    }
}