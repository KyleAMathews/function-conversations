export default function handler(req, res) {
  console.log(req.params)
  const params = req.params[`*`].split(`/`)
  res.json(params)

  // `src/api/foo/1/2 // params[0] === `1`
  // params[1] === `2`
}
