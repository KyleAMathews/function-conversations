import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import _ from "lodash"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(req.params)
  res.send(`Hello ${_.capitalize(req.params.name)}`)
}
