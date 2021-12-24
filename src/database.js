import { connect } from 'mongoose';
import { MONGODB_URI } from './config';
//func anonyme
(async () => {
    try {
        const db = await connect(MONGODB_URI);
        console.log('connect to', db.connection.name);
    } catch (error) {
        console.log('error', error);
    }
})();