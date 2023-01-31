import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
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
