exports.timezone = "Europe/Oslo";

exports.regularTradingDays = "Weekday";

exports.regularTradingHours = [
  { from: "9:00 am", to: "4:20 pm" }
];

exports.extendedTradingHours = [

];

exports.partialTradingDays = {
  2016: {
    March: [ 23 ]
  },
};

exports.partialTradingHours = [
  { from: "9:00 am", to: "1:00 pm" }
];

exports.holidays = {
  2016: {
    January: [ 1 ],
    March: [ 24, 25, 28 ],
    May: [ 5, 16, 17 ],
    December: [ 26 ]
  }
};
