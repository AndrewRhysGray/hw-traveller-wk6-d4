const Traveller = function(journeys) {
  this.journeys = journeys
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocation = this.journeys.map((locations) => {

   return locations.startLocation;
 });
  return journeyStartLocation;


};
Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocation =
   this.journeys.map((locations) => {
return locations.endLocation;
});
return journeyEndLocation;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  // const getJourneyByTransport = this.journeys.filter()[0,2]()

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
