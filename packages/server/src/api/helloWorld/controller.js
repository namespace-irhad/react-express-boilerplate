import * as service from './service';

export const getHelloWorld = async (req, res, next) => {
  try {
    const data = await service.getHelloWorld(req.body);
    return res.status(200).send(data);
  } catch (error) {
    return next(error);
  }
};
