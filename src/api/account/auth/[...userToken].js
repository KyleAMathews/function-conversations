export default function handler(req, res) {
  console.log(req.params)
  res.json(req.params)

  // `src/api/foo/1/2 // params[0] === `1`
  // params[1] === `2`
}
