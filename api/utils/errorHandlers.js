

export const asyncHandler = (fn) => (req, res, next) => {
   fn(req, res, next).catch((err)=> next(err));
  };
  

  export const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
  };
  