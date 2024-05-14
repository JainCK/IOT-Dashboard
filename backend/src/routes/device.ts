import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const deviceRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
    Variables: {
      userId: string;
    };
  }>();

  deviceRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";
    try {
      const user = await verify(authHeader, c.env.JWT_SECRET);
      if (user) {
        c.set("userId", user.id);
        await next();
      } else {
        c.status(403);
        return c.json({
          message: "You are not Logged In",
        });
      }
    } catch (error) {
      c.status(403);
      return c.json({
        message: "You are not Logged In",
      });
    }
  });

  deviceRouter.post("/", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
    try {
        const newDevice = await prisma.device.create({
          data: {
            name: body.name,
            description: body.description,
          },
        });
        console.log('New device added:', newDevice);
        return c.json(newDevice);
      } catch (error) {
        console.error('Error adding device:', error);
        throw error; 
      }
    })
  
    
    deviceRouter.get('/:deviceId/data', async (c) => {
        const body = await c.req.json();
        const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const deviceId = c.req.param("deviceId");
      
      try {
        const data = await prisma.deviceData.findMany({
          where: { deviceId },
          select: {
            timestamp: true,
            value: true,
          },
        });
        c.json(data);
      } catch (error) {
        c.status(500)
        return c.json({ error: 'Failed to retrieve data' });
      }
    });
    



{/* 

/:name
/data (json (date, data genrated ))
/realtime --sockets (?)
/report --genration(?)


*/}