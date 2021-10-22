import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import _ from "lodash"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(req)
  console.log(req.params)
  res.cookie('name',req.params.name, { maxAge: 900000, httpOnly: true });
  res.send(`<h1>Hello ${_.capitalize(req.params.name)}</h1>
           <div>
           <p>How are you feeling today?</p>
           <ul>
           <li><a href="/api/i-am-feeling/good">good</li>
           <li><a href="/api/i-am-feeling/bad">bad</li>
           <li><a href="/api/i-am-feeling/meh">meh</li>
           </ul>
           </div>
           `)
}
