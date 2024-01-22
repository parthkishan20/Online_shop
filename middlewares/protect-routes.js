function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.status(401).redirect('/401');
  }

  if (req.path.startsWith('/admin') && !res.locals.isAdmin) {
    return res.status(403).redirect('/403');
  }

  next();
}

module.exports = protectRoutes;