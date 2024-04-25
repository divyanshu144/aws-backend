import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  // here c -> consist of both req/res
 
  const body = await c.req.json()
  // getting inputs form user
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')

})

export default app
