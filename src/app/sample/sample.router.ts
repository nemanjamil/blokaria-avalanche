import { Router } from 'express';

// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get("/jedan", (req, res) => {
  res.status(200).send({
    message: "GET request from sample router"
  });
});

router.post("/dva", (req, res) => {
  res.status(200).send({
    message: "POST request from sample router"
  });
});

router.put("/tri", (req, res) => {
  res.status(200).send({
    message: "PUT request from sample router"
  });
});

router.delete("/cetiri", (req, res) => {
  res.status(200).send({
    message: "DELETE request from sample router"
  });
});


