export const FilterBoxOptions = {
  superCategories: [
    {
      label: "Demographics",
      options: [
        {
          label: "Age"
        },
        {
          label: "Border Crossing Frequency"
        },
        {
          label: "Border Location"
        },
        {
          label: "Country of Residence"
        },
        {
          label: "Education Level"
        },
        {
          label: "Gender"
        },
        {
          label: "Preferred Language"
        },
        {
          label: "Cross Border Trade as Primary Income"
        },
        {
          label: "Grow/Produce their Own Goods"
        }
      ]
    },
    {
      label: "Trade Insights",
      options: [
        {
          label: "Requested Agencies"
        },
        {
          label: "Requested Documents"
        },
        {
          label: "Requested Procedures, by Commodity"
        },
        {
          label: "Requested Procedures, by Commodity Category"
        },
        {
          label: "Requested Procedures, by Destination"
        }
      ]
    },
    {
      label: "Business Insights",
      options: [
        {
          label: "Currency Exchanges"
        },
        {
          label: "Traders' Destination Country"
        },
        {
          label: "Traders' Destination Market"
        },
        {
          label: "Traded Commodities' Origin"
        },
        {
          label: "Traded Commodities"
        },
        {
          label: "Traded Commodity Categories"
        }
      ]
    }
  ],
  default: {
    Gender: {
      value: { type: "gender", query: "Users" },
      subLabels: ["Male", "Female"]
    },
    "Education Level": { value: { type: "education", query: "Users" } },
    "Border Crossing Frequency": {
      value: { type: "crossing_freq", query: "Users" }
    },
    "Border Location": {
      value: { type: "crossing_location", query: "Users" }
    },
    Age: { value: { type: "age", query: "Users" } },
    "Country of Residence": {
      value: { type: "country_of_residence", query: "Users" }
    },
    "Cross Border Trade as Primary Income": {
      value: { type: "primary_income", query: "Users" }
    },
    "Preferred Language": { value: { type: "language", query: "Users" } },
    "Grow/Produce their Own Goods": {
      value: { type: "produce", query: "Users" }
    },
    "Requested Procedures, by Commodity": {
      value: { type: "procedurecommodity", query: "Sessions" }
    },
    "Requested Procedures, by Commodity Category": {
      value: { type: "procedurecommoditycat", query: "Sessions" }
    },
    "Requested Procedures, by Destination": {
      value: { type: "proceduredest", query: "Sessions" }
    },
    "Requested Documents": {
      value: { type: "procedurerequireddocument", query: "Sessions" }
    },
    "Requested Agencies": {
      value: { type: "procedurerelevantagency", query: "Sessions" }
    },
    "Traded Commodities' Origin": {
      value: { type: "procedureorigin", query: "Sessions" }
    },
    "Traders' Destination Country": {
      value: { type: "commoditycountry", query: "Sessions" }
    },
    "Traders' Destination Market": {
      value: { type: "commoditymarket", query: "Sessions" }
    },
    "Traded Commodities": {
      value: { type: "commodityproduct", query: "Sessions" }
    },
    "Traded Commodity Categories": {
      value: { type: "commoditycat", query: "Sessions" }
    },
    "Currency Exchanges": {
      value: { type: "exchangedirection", query: "Sessions" }
    }
  },
  filtered: [
    { label: "Gender", value: { type: "gender", query: "Users" } },
    { label: "Education Level", value: { type: "education", query: "Users" } },
    {
      label: "Border Crossing Frequency",
      value: { type: "crossing_freq", query: "Users" }
    },
    {
      label: "Border Location",
      value: { type: "crossing_location", query: "Users" }
    },
    { label: "Age", value: { type: "age", query: "Users" } },
    {
      label: "Country of Residence",
      value: { type: "country_of_residence", query: "Users" }
    },
    {
      label: "Cross Border Trade as Primary Income",
      value: { type: "primary_income", query: "Users" }
    },
    {
      label: "Preferred Language",
      value: { type: "language", query: "Users" }
    },
    {
      label: "Grow/Produce their Own Goods",
      value: { type: "produce", query: "Users" }
    }
  ],
  tableNamesToCategoryName: {
    gender: "Gender",
    education: "Education Level",
    crossing_freq: "Border Crossing Frequency",
    crossing_location: "Border Location",
    age: "Age",
    country_of_residence: "Country of Residence",
    primary_income: "Cross Border Trade as Primary Income",
    language: "Preferred Language",
    produce: "Grow/Produce their Own Goods",
    procedurecommodity: "Requested Procedures, by Commodity",
    procedurecommoditycat: "Requested Procedures, by Commodity Category",
    proceduredest: "Requested Procedures, by Destination",
    procedurerequireddocument: "Requested Documents",
    procedurerelevantagency: "Requested Agencies",
    procedureorigin: "Traded Commodities' Origin",
    commoditycountry: "Traders' Destination Country",
    commoditymarket: "Traders' Destination Market",
    commodityproduct: "Traded Commodities",
    commoditycat: "Traded Commodity Categories",
    exchangedirection: "Currency Exchanges"
  }
};
