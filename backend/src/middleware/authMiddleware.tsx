import { Hono } from "hono";
import { verify } from "hono/jwt";


export const authMiddleware = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
    Variables: {
      userId: string;
    };
  }>();



  authMiddleware.use("/*", async (c, next) => {
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