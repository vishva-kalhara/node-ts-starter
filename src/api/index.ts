import dotenv from 'dotenv';
import { createApp } from './app';

const app = createApp();

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception! Server is shutting down...');
  console.log(err.name, err.message);
  // console.log(err)
  process.exit(1);
});

dotenv.config({ path: '../configs/.env' });
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// export default server
