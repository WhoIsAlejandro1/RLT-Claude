'use strict';

const app = require('./src/app');

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, () => {
  console.log(`Renewed Life Therapies site running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the other process or run: set PORT=3001 && npm start`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
