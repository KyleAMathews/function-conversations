
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import _ from "lodash"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.json(req)
}
