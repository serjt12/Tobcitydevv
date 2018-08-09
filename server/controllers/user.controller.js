import User from '../models/user';

export function addUser(req, res) {
  if (!req.body.user.Id || !req.body.user.provider || !req.body.user.name || !req.body.user.email || !req.body.user.avatar  ) {
    res.status(403).end();
  }
  const currentUser = new User(req.body.user);
  const existingUser = User.findOne({
    Id: req.body.user.Id,
  });
  if (existingUser) {
    currentUser.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(saved);
    })
  }
}
