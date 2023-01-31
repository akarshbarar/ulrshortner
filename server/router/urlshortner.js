import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  try {
    return res.status(200).send({
      status: 'Success',
    });
  } catch (error) {
    return res.status(500).send({
      status: 'Error',
    });
  }
});

export default router;
