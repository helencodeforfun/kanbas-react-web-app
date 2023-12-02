import * as dao from "./dao.js"

export default function UserRoutes(app) {
  app.get("/api/users", async (req, res) => {
    let result = await dao.findAllUsers();
    res.json(result)
  })


  app.post("/api/users/signin", async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username,password)
    req.session['currentUser'] = currentUser
    console.log(req.session['currentUser'])
    res.json(currentUser)
  })

  app.post("/api/users/signout", (req,res) => {
    req.session.destroy()
    res.json(200)
  })

  app.post("/api/users/signup", async (req, res) => {
    let user = await dao.findUserByUsername(req.body.username)
    if (user) {
      return res.status(403).send({error:"username already in place"})
    }
    let status = await dao.createUser(req.body)
    req.session["currentUser"] = await dao.findUserByUsername(req.body.username)
    res.json(status)
  })

  app.get("/api/users/account", (req, res) => {
    console.log(req.session['currentUser'])
    res.json(req.session['currentUser'])
  })

  app.get("/api/users/:uid", async (req, res) => {
    let { uid } = req.params
    let result = await dao.findUserById(uid)
    res.json(result)
  })

  app.put("/api/users/:uid", async (req, res) => {
    const { uid } = req.params;
    const status = await dao.updateUser(uid, req.body)
    req.session["currentUser"] = await dao.findUserById(uid)
    res.json(status)
  })

  app.post("/api/users", async (req, res) => {
    console.log(req.body)
    const status = await dao.createUser(req.body)
    res.json(status)
  })

  app.delete("/api/users/:uid", async (req, res) => {
    const { uid } = req.params;
    const status = await dao.deleteUser(uid)
    res.json(status)
  })
}