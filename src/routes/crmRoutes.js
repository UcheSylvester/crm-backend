import {
  addNewContact,
  getAllContacts,
  getContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contacts")
    .get((req, res, next) => {
      //  Middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);

      next();
    }, getAllContacts)

    .post(addNewContact);

  app
    .route("/contacts/:contactId")
    // .get(getContact)
    .put((req, res) => {
      res.send("PUT request successful");
    })

    .delete((req, res) => {
      res.send("DELETE request successful");
    });
};

export default routes;
