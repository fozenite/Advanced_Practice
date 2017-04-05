
// GIVEN DATA
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// Implement a function that :
//  A) Calculates Total Sales
//  B) Total Tax

function calculateSalesTax(salesData, taxRates) {

  var myResults = {};


  // FOR GOING THROUGH companySales
    for  (salesDataCrawler in companySalesData){

     if (!myResults[companySalesData[salesDataCrawler].name]){

       myResults[companySalesData[salesDataCrawler].name] = {
          totalSales: 0,
          totalTaxes: 0
       };
       // ADD UP ALL OF THE SALES IN THIS OBJECT
       var salesAdded = companySalesData[salesDataCrawler].sales.reduce(function(acc, val)
                        {return acc + val;}, 0);;
       myResults[companySalesData[salesDataCrawler].name].totalSales += salesAdded;
       // Get the value of Tax for the object .. Look up the key value in the salesTaxRates
       // multiply with saleAdded for Object;
       myResults[companySalesData[salesDataCrawler].name].totalTaxes = salesAdded * (salesTaxRates[companySalesData[salesDataCrawler].province]);
      }
    else {

      salesAdded = companySalesData[salesDataCrawler].sales.reduce(function(acc, val)
                       {return acc + val;}, 0);;
       myResults[companySalesData[salesDataCrawler].name].totalSales += salesAdded;
         // Get the value of Tax for the object .. Look up the key value in the salesTaxRates
       // multiply with saleAdded for Object;
       myResults[companySalesData[salesDataCrawler].name].totalTaxes += (salesAdded * (salesTaxRates[companySalesData[salesDataCrawler].province]));


    }

    }
     return myResults;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);