import { where } from "sequelize";
import Activity from "../models/activity.model.js";

const activityController = {};
//Add and save a new activity
activityController.create = async (req, res) => {
  const {
    name,
    description,
    type,
    level,
    team_size,
    date,
    location,
    reg_open,
    reg_close,
    contact_name,
    contact_phone,
    contact_email,
    status,
  } = req.body;
  //validate data
  if (
    !name ||
    !type ||
    !team_size ||
    !date ||
    !location ||
    !reg_open ||
    !reg_close ||
    !contact_name ||
    !contact_phone ||
    !contact_email ||
    !status ||
    !level ||
    !description
  ) {
    res.status(400).send({ message: "Input can not be empty!" });
    return;
  }

  await Activity.findOne({ where: { name: name } }).then((activity) => {
    if (activity) {
      res.status(400).send({ message: "Activity is already exists!" });
      return;
    }

    const createActivity = {
      name: name,
      description: description,
      type: type,
      level: level,
      team_size: team_size,
      date: date,
      location: location,
      reg_open: reg_open,
      reg_close: reg_close,
      contact_name: contact_name,
      contact_phone: contact_phone,
      contact_email: contact_email,
      status: status,
    };

    Activity.create(createActivity)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Something error while creating the activity",
        });
      });
  });
};

//Get All Activitys
activityController.getAll = async (req, res) => {
  await Activity.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something error while getAll the activity",
      });
    });
};
//Get Activity By Id
activityController.getById = async (req, res) => {
  const id = req.params.id;
  await Activity.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No found activity with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error while getById the Activity" + id,
      });
    });
};
//Update Activity By Id
activityController.updateById = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    type,
    team_size,
    description,
    level,
    date,
    location,
    reg_open,
    reg_close,
    contact_name,
    contact_phone,
    contact_email,
    status,
  } = req.body;
  //validate data
  if (
    !name &&
    !type &&
    !team_size &&
    !description &&
    !level &&
    !date &&
    !location &&
    !reg_open &&
    !reg_close &&
    !contact_name &&
    !contact_phone &&
    !contact_email &&
    !status
  ) {
    res.status(404).send({
      message: "Name, Type,  and Team Size can not be empty!",
    });
    return;
  }
  await Activity.update(
    {
      name,
      type,
      team_size,
      description,
      level,
      date,
      location,
      reg_open,
      reg_close,
      contact_name,
      contact_phone,
      contact_email,
      status,
    },
    {
      where: { id },
    }
  )
    .then((num) => {
      if (num[0] === 1) {
        res.send({ message: "Activity update successfully!" });
      } else {
        res.status(404).send({
          message:
            "Cannot update activity with " +
            id +
            ". Maybe activity was not found.",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something error while Update the activity",
      });
    });
};
//Delete Activity By Id
activityController.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "Id is missing!" });
    return;
  }
  await Activity.destroy({ where: { id } })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Activity was deleted successfully!" });
      } else {
        res.status(404).send({
          message: "Cannot delete Activity with id " + id + ".",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something error while Deleting the activity",
      });
    });
};
activityController.searchActivity = async (req, res) => {
  const { name, type, level, status } = req.query;
  let whereClause = {}; // Initialize an empty where clause

  // Add conditions to the where clause based on provided query parameters
  if (name) {
    whereClause.name = { [Op.like]: `%${name}%` };
  }
  if (type) {
    whereClause.type = type;
  }
  if (level) {
    whereClause.level = level;
  }
  if (status) {
    whereClause.date = status;
  }
  try {
    const activities = await Activity.findAll({ where: whereClause });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error searching activities", error });
  }
};
export default activityController;
