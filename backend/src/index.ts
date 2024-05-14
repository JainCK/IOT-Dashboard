import { Hono } from 'hono'
import { userRouter } from "./routes/user"
import { accessRouter } from './routes/access';
import {deviceRouter} from "./routes/device"
import { cors } from 'hono/cors';

export const app = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
  }>();
app.use("/*", cors());
app.route('/api/v1/user', userRouter);
app.route('/api/v1/user', accessRouter);
app.route('/api/v1/device', deviceRouter);

export default app
