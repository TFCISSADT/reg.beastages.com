module.exports = [
  {
    key: "ONSITE",
    name: "Onsite Payment",
    icon: "desk",
    excludeCountries: [],
  },
  {
    key: "NEWEBPAY_ATM",
    name: "ATM",
    icon: "atm",
    excludeCountries: [],
  },
  {
    key: "NEWEBPAY_CVS",
    name: "超商代碼",
    icon: "store",
    excludeCountries: [],
  },
  {
    key: "NEWEBPAY_CC",
    name: "Credit Card",
    icon: "credit-card",
    excludeCountries: [],
  },
  {
    key: "CREDIT_CARD",
    name: "Credit Card",
    icon: "credit-card",
    excludeCountries: ["TW"],
  },
  {
    key: "OEN_ATM",
    name: "ATM",
    icon: "atm",
    priceRange: [80, 30000],
    excludeCountries: [],
  },
  {
    key: "OEN_CVS",
    name: "超商代碼",
    icon: "store",
    priceRange: [1, 6000],
    excludeCountries: [],
  },
  {
    key: "OEN_CC",
    name: "Credit Card",
    icon: "credit-card",
    priceRange: null,
    excludeCountries: [],
  },
];
