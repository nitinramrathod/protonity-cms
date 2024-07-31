import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI ', MONGODB_URI);

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState.readyState === 1) {
        console.log('Already connected.');
        return;
    }

    if (connectionState.readyState === 2) {
        console.log('Connecting...');
        return;
    }

    try {

        mongoose.connect(MONGODB_URI, {
            dbName: 'protonity',
            bufferCommands: true,
        });
        console.log('Connected');

    } catch (error) {
        console.log('Error: ', error);
        throw new Error(error);
    }


}

export default connect;
