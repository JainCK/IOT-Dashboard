import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const accessRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
    Variables: {
      userId: string;
    };
  }>();

  
  accessRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";
    try {
      const decoded  = await verify(authHeader, c.env.JWT_SECRET);
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const user = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });
      if (!user || user.role !== 'Admin') {
        throw new Error('Unauthorized'); 
      }
        await next();
    } catch (error) {
      console.log(error)
      c.status(403);
      return c.json({
        message: "You are not an Admin",
      });
    }
  });

accessRouter.put('/', async(c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.update({
    where: {
      id: body.id,
    },
    data: {   
      role: body.role,
      active: body.active ? false : true
    },
  });

  return c.text("role or active status updated successfully");
})


accessRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

    try {
      const users = await prisma.user.findMany({ 
        select: {
            name: true,
            email: true,
            role: true,
            id: true
        }
    });
  
    return c.json(users)
    } catch (error) {
      console.log(error);
    }
})


accessRouter.delete("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const delUser = await prisma.user.delete({ 
      where: {
        id: body.id
      }
  });

  return c.text("user deleted")
})





{/* 


/bulk --get --pagination

*/}