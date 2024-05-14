import moment from 'moment';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { env } from 'hono/adapter';

export const dvdataRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    };
    Variables: {
      userId: string;
    };
  }>();


interface DeviceData {
  deviceId: string;
  timestamp: string;
  value: string;
}

const devices: { [key: string]: () => string } = {
  D1: () => Math.floor(10 + Math.random() * 90).toString() + Math.floor(10 + Math.random() * 90).toString(),
  D2: () => Math.floor(100 + Math.random() * 900).toString() + Math.floor(10 + Math.random() * 90).toString() + Math.floor(10 + Math.random() * 90).toString(),
  D3: () => Math.floor(1000 + Math.random() * 9000).toString() + Math.floor(10 + Math.random() * 90).toString() + Math.floor(10 + Math.random() * 90).toString() + Math.floor(10 + Math.random() * 90).toString(),
  D4: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  D5: () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
  D6: () => devices.D1() + devices.D4(),
  D7: () => {
    const d5 = devices.D5();
    const d3 = devices.D3();
    return d5.slice(2) + d3.slice(0, 2) + d5.slice(0, 2) + d3.slice(2);
  },
};

const generateData = async () => {
  const data: DeviceData[] = [];
  for (const deviceId in devices) {
    const value = devices[deviceId]();
    data.push({
      deviceId,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      value,
    });
  }
  const prisma = new PrismaClient().$extends(withAccelerate());
  await prisma.deviceData.createMany({
    data: data.map(item => ({
      deviceId: item.deviceId,
      timestamp: new Date(item.timestamp),
      value: item.value,
    })),
  });
  
    console.log(data);
    return data;
  };

setInterval(generateData, 1000); 



