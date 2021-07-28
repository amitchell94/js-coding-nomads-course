let expenses = [
  [
    "Date",
    "Description",
    "Category",
    "Amount",
    "Account",
    "Account #",
    "Institution"
  ],
  [
    "2018-02-14T05:00:00.000Z",
    "Methow Conservancy",
    "Charity",
    -250,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-02-14T05:00:00.000Z",
    "Zeitgeist Coffee, Seattle, WA",
    "Coffee",
    -10.09547940682435,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-13T05:00:00.000Z",
    "Shell Oil, Auto Fuel Dispenser",
    "Auto and Gas",
    -38.68916580909925,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-12T05:00:00.000Z",
    "Winthrop Mountain Sports Winthrop, WA",
    "Gear and Clothing",
    -39.32394497005602,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-11T05:00:00.000Z",
    "Toyota of Seattle, Seattle, WA",
    "Auto and Gas",
    -251.38205580139754,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-10T05:00:00.000Z",
    "Amazon.com",
    "Gear and Clothing",
    -25.808571837218487,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2018-02-09T05:00:00.000Z",
    "Chase Bank Mortgage",
    "Mortgage",
    -1903,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-02-09T05:00:00.000Z",
    "Paycheck",
    "Paycheck",
    5544,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-02-09T05:00:00.000Z",
    "Audible",
    "Subscriptions",
    -9.115287413929583,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2018-02-08T05:00:00.000Z",
    "Storyville Coffee, Seattle, WA",
    "Eating Out",
    -8.928058478985726,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-08T05:00:00.000Z",
    "Hank's Harvest Foodstwisp WA",
    "Groceries",
    -46.45521318072057,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-07T05:00:00.000Z",
    "Ikea Seattle, Renton, WA",
    "Home Improvements",
    -246.53506616141286,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-06T05:00:00.000Z",
    "Itunes.com",
    "Subscriptions",
    -1.5893293546870486,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-02-05T05:00:00.000Z",
    "Mazama Store, Mazama",
    "Eating Out",
    -15.534943959463117,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-05T05:00:00.000Z",
    "New York Times Digital",
    "Subscriptions",
    -18.083209013978067,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-02-04T05:00:00.000Z",
    "Roadpost Usa",
    "Subscriptions",
    -35.848294657848044,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-02-03T05:00:00.000Z",
    "Chevron Service Stn",
    "Auto and Gas",
    -27.6907565783354,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-02T05:00:00.000Z",
    "Texaco Service Stn",
    "Auto and Gas",
    -25.280933498351065,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-01T05:00:00.000Z",
    "Costco Gas, Burlington",
    "Auto and Gas",
    -19.15537966529622,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-02-01T05:00:00.000Z",
    "Dropbox",
    "Subscriptions",
    -6.1872186695912,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-31T05:00:00.000Z",
    "Zoka Coffee Roa, Seattle, WA",
    "Eating Out",
    -2.104954454933721,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-31T05:00:00.000Z",
    "Okanogan County Energy, Winthrop, WA",
    "Utilities",
    -164.34778223566545,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-30T05:00:00.000Z",
    "Alaska Air",
    "Travel",
    -156.1,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-29T05:00:00.000Z",
    "Seattle YMCA",
    "Charity",
    -400,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-28T05:00:00.000Z",
    "Trader Joe's #130, Seattle",
    "Groceries",
    -69.1,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-27T05:00:00.000Z",
    "Roadpost Usa",
    "Subscriptions",
    -56.98,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-26T05:00:00.000Z",
    "Chevron Service Stn",
    "Auto and Gas",
    -37.62,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-26T05:00:00.000Z",
    "Tiller (tillerhq.com)",
    "Subscriptions",
    -10,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-25T05:00:00.000Z",
    "Shell Oil, Auto Fuel Dispenser",
    "Auto and Gas",
    -47.83,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-24T05:00:00.000Z",
    "Winthrop Mountain Sports Winthrop, WA",
    "Stuff",
    -55.82,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-23T05:00:00.000Z",
    "Alaska Wilderness League",
    "Charity",
    -400,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-01-22T05:00:00.000Z",
    "Big Star Montessori",
    "Classes",
    -740,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-01-22T05:00:00.000Z",
    "Itunes.com",
    "Subscriptions",
    -2.99,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-21T05:00:00.000Z",
    "Mazama Store, Mazama",
    "Eating Out",
    -18.18,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-19T05:00:00.000Z",
    "Toyota of Seattle, Seattle, WA",
    "Auto and Gas",
    -435.11,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-18T05:00:00.000Z",
    "Amazon.com",
    "Gear and Clothing",
    -30,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2018-01-16T05:00:00.000Z",
    "PCC Natural Market - Issaquah WA",
    "Groceries",
    -23,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-15T05:00:00.000Z",
    "Etsy",
    "Freelance",
    923,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-01-14T05:00:00.000Z",
    "Espresso Vivace Seattle, Seattle, WA",
    "Eating Out",
    -7.25,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-14T05:00:00.000Z",
    "The Essential Baking Co, Seattle, WA",
    "Eating Out",
    -16.35,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-13T05:00:00.000Z",
    "AT&T",
    "Phone",
    -125.43,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-12T05:00:00.000Z",
    "Zeitgeist Coffee, Seattle, WA",
    "Eating Out",
    -12.51,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-11T05:00:00.000Z",
    "Centurylink",
    "Phone",
    -43.73,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-10T05:00:00.000Z",
    "Portage Bay Cafe and Cate, Seattle, WA",
    "Eating Out",
    -72.28,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-10T05:00:00.000Z",
    "Whole Foods - Seattle WA",
    "Groceries",
    -108.91,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-10T05:00:00.000Z",
    "Chase Bank Mortgage",
    "Mortgage",
    -1903,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-01-10T05:00:00.000Z",
    "Paycheck",
    "Paycheck",
    5544,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2018-01-10T05:00:00.000Z",
    "Audible",
    "Subscriptions",
    -16.18,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2018-01-09T05:00:00.000Z",
    "REI, Store 11, Seattle",
    "Gear and Clothing",
    -513.97,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-09T05:00:00.000Z",
    "Union Garage",
    "Parking",
    -50,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-08T05:00:00.000Z",
    "Evergreen Iga Market",
    "Groceries",
    -36.76,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-07T05:00:00.000Z",
    "Glover Street Market",
    "Eating Out",
    -35.34,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-06T05:00:00.000Z",
    "Costco Gas, Burlington",
    "Auto and Gas",
    -19.67,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-06T05:00:00.000Z",
    "Texaco Service Stn",
    "Auto and Gas",
    -48.74,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-06T05:00:00.000Z",
    "New York Times Digital",
    "Subscriptions",
    -20,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2018-01-05T05:00:00.000Z",
    "Dropbox",
    "Subscriptions",
    -10.81,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-04T05:00:00.000Z",
    "Hank's Harvest Foodstwisp WA",
    "Groceries",
    -52.69,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2018-01-03T05:00:00.000Z",
    "Storyville Coffee, Seattle, WA",
    "Eating Out",
    -12.91,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-02T05:00:00.000Z",
    "Home Depot",
    "Home Improvements",
    -251.33,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-01T05:00:00.000Z",
    "Zoka Coffee Roa, Seattle, WA",
    "Eating Out",
    -3.56,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2018-01-01T05:00:00.000Z",
    "Okanogan County Energy, Winthrop, WA",
    "Utilities",
    -322.84,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-31T05:00:00.000Z",
    "Alaska Air",
    "Travel",
    -115.74967014479407,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-30T05:00:00.000Z",
    "Evergreen Iga Market",
    "Groceries",
    -28.600200780444766,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-29T05:00:00.000Z",
    "Glover Street Market",
    "Eating Out",
    -27.972195350837076,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-28T05:00:00.000Z",
    "Big Star Montessori",
    "Classes",
    -621.1731484738832,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2017-12-27T05:00:00.000Z",
    "United Way",
    "Charity",
    -300,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-26T05:00:00.000Z",
    "Tiller (tillerhq.com)",
    "Subscriptions",
    -6.872212037170101,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-25T05:00:00.000Z",
    "PCC Natural Market - Issaquah WA",
    "Groceries",
    -14.63268068805967,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-24T05:00:00.000Z",
    "Etsy",
    "Freelance",
    653.5878551844278,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2017-12-23T05:00:00.000Z",
    "Espresso Vivace Seattle, Seattle, WA",
    "Eating Out",
    -6.18155654415109,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-23T05:00:00.000Z",
    "The Essential Baking Co, Seattle, WA",
    "Eating Out",
    -15.956849155308712,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-22T05:00:00.000Z",
    "Shell Oil, Auto Fuel Dispenser",
    "Auto and Gas",
    -25.17219849026685,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-22T05:00:00.000Z",
    "Winthrop Mountain Sports Winthrop, WA",
    "Stuff",
    -50.34857494959573,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-21T05:00:00.000Z",
    "REI, Store 11, Seattle",
    "Gear and Clothing",
    -488.95510428597606,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-20T05:00:00.000Z",
    "Toyota of Seattle, Seattle, WA",
    "Auto and Gas",
    -260.3672663569953,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-19T05:00:00.000Z",
    "Amazon.com",
    "Gear and Clothing",
    -16.48896418855478,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2017-12-17T05:00:00.000Z",
    "Hank's Harvest Foodstwisp WA",
    "Groceries",
    -27.183768951838047,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-16T05:00:00.000Z",
    "Khan Academy",
    "Charity",
    -300,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2017-12-15T05:00:00.000Z",
    "Roadpost Usa",
    "Subscriptions",
    -34.21658162443002,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-14T05:00:00.000Z",
    "Chevron Service Stn",
    "Auto and Gas",
    -25.753114033343255,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-13T05:00:00.000Z",
    "Texaco Service Stn",
    "Auto and Gas",
    -44.81379030050658,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-13T05:00:00.000Z",
    "AT&T",
    "Phone",
    -102.8502322142107,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-12T05:00:00.000Z",
    "Costco Gas, Burlington",
    "Auto and Gas",
    -13.772233433191696,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-11T05:00:00.000Z",
    "Zeitgeist Coffee, Seattle, WA",
    "Eating Out",
    -10.264651962190525,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-11T05:00:00.000Z",
    "Dropbox",
    "Subscriptions",
    -9.714603292361232,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-10T05:00:00.000Z",
    "Storyville Coffee, Seattle, WA",
    "Eating Out",
    -11.733451140784947,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-10T05:00:00.000Z",
    "Chase Bank Mortgage",
    "Mortgage",
    -1903,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2017-12-10T05:00:00.000Z",
    "Paycheck",
    "Paycheck",
    5544,
    "Family Checking",
    "xxxx3244",
    "Chase - Checking",
  ],
  [
    "2017-12-10T05:00:00.000Z",
    "Audible",
    "Subscriptions",
    -15.119178234607485,
    "Visa Rewards",
    "xxxx3827",
    "Chase - Credit Card",
  ],
  [
    "2017-12-09T05:00:00.000Z",
    "North Valley Lumber",
    "Home Improvements",
    -249.68057299921207,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-08T05:00:00.000Z",
    "Itunes.com",
    "Subscriptions",
    -2.0757459156642257,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-07T05:00:00.000Z",
    "Mazama Store, Mazama",
    "Eating Out",
    -16.06684016842345,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-06T05:00:00.000Z",
    "Trader Joe's #130, Seattle",
    "Groceries",
    -68.51537488974336,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-06T05:00:00.000Z",
    "New York Times Digital",
    "Subscriptions",
    -18.12132712593789,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-05T05:00:00.000Z",
    "Centurylink",
    "Phone",
    -24.422722278885228,
    "Visa Rewards",
    "xxxx5345",
    "Chase - Credit Card",
  ],
  [
    "2017-12-04T05:00:00.000Z",
    "Whole Foods - Seattle WA",
    "Groceries",
    -107.75932954943372,
    "American Express",
    "xxxx1005",
    "American Express Cards",
  ],
  [
    "2017-12-03T05:00:00.000Z",
    "Portage Bay Cafe and Cate, Seattle, WA",
    "Eating Out",
    -60.205891588102475,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-03T05:00:00.000Z",
    "Union Garage",
    "Parking",
    -25.409532702415337,
    "Alaska Airlines Visa",
    "xxxx2387",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-02T05:00:00.000Z",
    "Zoka Coffee Roa, Seattle, WA",
    "Eating Out",
    -2.5152269314867968,
    "Alaska Airlines Visa",
    "xxxx1561",
    "Bank of America - Credit Card",
  ],
  [
    "2017-12-02T05:00:00.000Z",
    "Okanogan County Energy, Winthrop, WA",
    "Utilities",
    -205.43755902360425,
    "Alaska Airlines Visa",
    "xxxx3499",
    "Bank of America - Credit Card",
  ],
];

/**
 * Below is a data set that was generated from a spreadsheet. Tabular data is
 * often transmitted via code as a two dimensional array, with each sub array
 * representing one row, and each element in each sub array is one cell. Often
 * the first sub array contains the headers of the columns as it does below.
 *
 * Note the strange format of the Date value. This is what a date object looks
 * like when it is printed as a string.
 *
 * This data represents an account book of expenses and incomes. Negative
 * amounts are expenses and positive amounts are incomes.
 *
 *
 * Remove the first sub array containing headers without manually deleting it.
 * Do you remember the method to remove the first element of an array?
 * 
 * Then, using forEach and arrow functions:
 *
 * 1. Output the total amount of expenses for 2017 and 2018.
 * 2. Output the total amount paid for Groceries.
 * 3. Output the total difference in each account after all transactions. So if
 *    $100 was deposited into the account and $50 spent, then the total change
 *    would be $50.
 * 4. Create a new array that only has the date, description, and amount of rows
 *    that have the category "Eating Out".
 * 5. Create another array with only the date, description and amount of rows
 *    that have the category "Gear and Clothing".
 */

let headers = expenses.shift();

let expenseSum = 0;
expenses.forEach(expense => expenseSum += expense[3])
console.log(expenseSum)

let groceriesSum = 0;
expenses.forEach(expense => {
  if (expense[2] == "Groceries") {
    groceriesSum += expense[3]
  }
})
console.log(groceriesSum)

let accountTotals = {};
expenses.forEach(expense => {
  let accountNo = expense[5];
  if (accountTotals[accountNo] == null) {
    accountTotals[accountNo] = expense[3]
  } else {
    accountTotals[accountNo] += expense[3]
  }
})
console.log(accountTotals)

let eatingOutArray = []
expenses.forEach(expense => {
  if (expense[2] == "Eating Out") {
    eatingOutArray.push([expense[0],expense[1]])
  }
})
console.log(eatingOutArray)
console.log(eatingOutArray.length)

let gearArray = []
expenses.forEach(expense => {
  if (expense[2] == "Gear and Clothing") {
    gearArray.push([expense[0],expense[1]])
  }
})
console.log(gearArray)
console.log(gearArray.length)