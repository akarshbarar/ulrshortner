/* eslint-disable import/extensions */
import express from 'express';
import router from './router/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/v1/api/', router);
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT}`);
});
