const Dress = require("../models/dress");

exports.createDress = async (req, res) => {
  const dress = await Dress.create(req.body);
  res.json(dress);
};

exports.getAllDress = async (req, res) => {
  const dress = await Dress.findAll();
  res.json(dress);
};

exports.updateDress = async (req, res) => {
  await Dress.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ message: "Updated" });
};

exports.deleteDress = async (req, res) => {
  await Dress.destroy({
    where: { id: req.params.id },
  });
  res.json({ message: "Deleted" });
};