module.exports.responseReturn = (res, StatsCode, data) => {
  res.status(StatsCode).json(data);
};
