import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      description: user.description,
      isAdmin: user.isAdmin,
      isArtist: user.isArtist,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d", // 30 dias de expiracion del token por lo que el usuario no tendra que iniciar sesion cada vez que entre a la pagina en ese periodo de tiempo
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // se carga la palabra "Bearer" y solo coge el resto de caracteres XXXXXX como token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
