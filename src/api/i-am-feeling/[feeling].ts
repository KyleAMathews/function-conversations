import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import _ from "lodash"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(req.cookies)
  const name = _.capitalize(req.cookies.name)
  switch (req.params.feeling) {
    case "good":
      res.send(`I'm glad ${name} you're feeling ${req.params.feeling}`)
      break;
    case "bad":
      res.send(`I'm so sorry ${name} to hear you're feeling ${req.params.feeling}`)
      break;
    case "meh":
      res.send(`well hopefully ${name} you'll get some good tv in later`)
      break;
    default:
      res.send(`hmmm not sure I recognize that emotion`)
  }
}

