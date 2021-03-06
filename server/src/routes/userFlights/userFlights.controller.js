const {checkMaximumHoliday, getAllDocuments, getAllReferences, fireEvents} = require("../../models/userFlight.model")

const httpGetLatestFlightsByReference = async (req, res) => {
  console.log(req.body)
  // console.log("I think I was called!! Wooot")
  return res.status(200).json(await checkMaximumHoliday(req.body.reference))
}

const httpGetAllDocuments = async (req, res) => {
  return res.status(200).json(await getAllDocuments())
}

const httpGetAllReferences = async (req, res) => res.status(200).json(await getAllReferences())

const httpGetReferences = async (req, res) => {
  return res.status(200).json(await getAllDocuments())
}

const httpFireEvents = (req, res) => {
  fireEvents(req.body.reference)
  return res.status(200).json({fired: "successfull"})
}

module.exports = {
  httpGetLatestFlightsByReference,
  httpGetAllDocuments,
  httpFireEvents,
  httpGetAllReferences
}