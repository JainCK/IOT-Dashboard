import { Hono } from 'hono'
import {userRouter } from "./routes/user"
import {deviceRouter} from "./routes/device"

const app = new Hono()

app.route('/api/v1/user', userRouter);
app.route('/api/v1/device', deviceRouter);

export default app
