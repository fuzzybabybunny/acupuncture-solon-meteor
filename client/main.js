  // formToCart = function() {
  //   // console.log("changed!");
  //   var orderFormContents = returnFormContentSetSessionVarSetSession();
  //   buildShoppingCartObject(orderFormContents);
  //   // console.log(amplify.store.sessionStorage("shoppingCart"));
  // };

  // getVendorDiscount = function(ShoppingCartObject){

  //   var sqft = parseInt( ShoppingCartObject.propertyInfo.sqft );
  //   var vendorDiscount = {};

  //   if ( (ShoppingCartObject.vendorsSelected === "OTS") 
  //     && (sqft <= 1500) 
  //     && (ShoppingCartObject.servicesSelected.spw.sku !== "noTour") ){
  //     vendorDiscount = {"OTS25": Discounts.findOne({sku: "OTS25"}, {fields: {sku: 1, title: 1, price: 1, _id: 0}} )};
  //   } else if ( (ShoppingCartObject.vendorsSelected === "OTS") 
  //     && (sqft > 1500) 
  //     && (ShoppingCartObject.servicesSelected.spw.sku !== "noTour") ){
  //     vendorDiscount = {"OTS50": Discounts.findOne({sku: "OTS50"}, {fields: {sku: 1, title: 1, price: 1, _id: 0}} )};
  //   } else if ( (ShoppingCartObject.vendorsSelected === "MH")       
  //     && (ShoppingCartObject.servicesSelected.spw.sku !== "noTour") ){
  //     vendorDiscount = {"MH50": Discounts.findOne({sku: "MH50"}, {fields: {sku: 1, title: 1, price: 1, _id: 0}} )};
  //   } else {
  //     vendorDiscount = {};
  //   }

  //   return vendorDiscount;

  // };

  // // takes a hash and an array with the desired order of the keys and 
  // // outputs an array ordered based on the keys
  // convertHashToArray = function(hashTable, desiredOrderArray) {
  //   return _.map(desiredOrderArray, function(key) {
  //     return _.object([[key, hashTable[key]]]);
  //   });
  // };

  // // takes an array of hashes and deletes the first key of each hash
  // // and shifts the rest of the hash into its place
  // removeTitlesFromArray = function(inputArray){
  //   arrayWithoutTitles = inputArray.map( function(hash){
  //     var obj = {};
  //     for(key in hash){
  //       obj = hash[key];
  //     }
  //     return obj;
  //   });
  //   return arrayWithoutTitles;
  // };

  // getSelectedItems = function(OrderFormContents) {

  //   var desiredOrderArray = [
  //     "hdrPhotos",
  //     "panos",
  //     "twilightPhotos",
  //     "exteriors",
  //     "videoClips",
  //     "fullVideo",
  //     "videoIntro",
  //     "videoClosing",
  //     "videoVoiceover",
  //     "twilightVideo",
  //     "tourbuzz",
  //     "tourfactory",
  //     "domain",
  //     "domainURL",
  //     "rush",
  //     "weekend"
  //   ];

  // 	if (OrderFormContents.servicesSelected.spw.sku === "noTour"){
  //     OrderFormContents.servicesSelected.domainURL = {};
  // 		OrderFormContents.servicesSelected.domainURL.title = "";
  // 	}

  //   selectedItems = {};
  //   selectedItemsOrdered = [];

  //   for (key in OrderFormContents.servicesSelected) {
  //     if (OrderFormContents.servicesSelected.hasOwnProperty(key) && key != "spw") {
  //       selectedItems[key] = {
  //         sku: key,
  //         price: Session.get("currentPrices")[key],
  //         title: Services.find( { "sku" : key }).fetch()[0].title
  //       };
  //     } else {
  //       spwType = OrderFormContents.servicesSelected.spw.sku;
  //       selectedItems[spwType] = selectedItems["spw"];
  //       delete selectedItems["spw"];
  //       selectedItems[spwType] = {
  //         sku: spwType,
  //         price: Session.get("currentPrices")[spwType],
  //         title: Services.find( { "sku" : spwType }).fetch()[0].title
  //       }
  //       // selectedItems = _.extend(selectedItems, ;
  //     };
  //   }

  //   if (OrderFormContents.servicesSelected.domainURL.title != ""){
  //     selectedItems.domainURL.title = OrderFormContents.servicesSelected.domainURL.title;
  //   }

  //   // if (OrderFormContents.servicesSelected.domain) {
  //   //   if (OrderFormContents.servicesSelected.domain.domainURL == ""){
  //   //   	delete OrderFormContents.servicesSelected.domain;
  //   //   	delete selectedItems.domain;
  //   //   } else {
  //   //   	selectedItems.domain.domainURL = OrderFormContents.servicesSelected.domain.domainURL;
  //   //   }
  //   // }
  //   // console.log("Services Checked");

  //   // creates an array from selectedItems hash
  //   selectedItemsOrdered = convertHashToArray(selectedItems, desiredOrderArray);
    
  //   // deletes the first key of the array for easy looping
  //   selectedItemsOrdered = removeTitlesFromArray(selectedItemsOrdered);

  //   Handlebars.registerHelper("selectedItemsOrdered", function(){
  //     return selectedItemsOrdered;
  //   });

  //   return selectedItemsOrdered;  
  // };

  // getTotalPriceOfSelectedItems = function(ShoppingCartObject, discount) {

  //   totalPrice = 0;

  //   for (var index in ShoppingCartObject.servicesSelected) {
  //     if (typeof ShoppingCartObject.servicesSelected[index] != "undefined"){
  //       totalPrice += ShoppingCartObject.servicesSelected[index].price;
  //     }
  //   }

  //   totalPrice += discount;

  //   Session.set("totalPrice", totalPrice);

  //   // ShoppingCartObject.totalPrice = totalPrice;
  //   // console.log("Total Price:");
  //   // console.log(totalPrice);
  //   return totalPrice;
  // };

  // getTotalDiscount = function(ShoppingCartObject) {

  //   totalDiscount = 0;

  //   for (var sku in ShoppingCartObject.discountsApplied) {
  //     totalDiscount += ShoppingCartObject.discountsApplied[sku].price;
  //   }

  //   return totalDiscount;
  // };

  // setAreaSurchargeTableAsSession = function(city){
  //   var allAreas = AreaSurcharges.find().fetch();
  //   for (var i = 0; i < allAreas.length ; i++){
  //     // console.log(allAreas[i]);
  //     for (var areaIndex = 0; areaIndex < allAreas[i].area.length; areaIndex++){
  //       if (allAreas[i].area[areaIndex] === city){
  //         Session.set("areaSurchargeTable", allAreas[i]); 
  //       };
  //     };
  //   };
  // };

  // // calculates prices of items based on parameters and creates a price sheet session variable for reference
  // calculatePrices = function(orderFormContents, areaSurchargeTable) {

  //   var sqft = parseInt( orderFormContents.propertyInfo.sqft );
  //   var zipcode = orderFormContents.propertyInfo.zipcode;

  //   var getPrice = function(sqft, zipcode, areaSurchargeTable) {
  //     var sizeSurchargeTable = SizeSurcharges.findOne({"minSize" : {$lte : sqft}, "maxSize" : {$gte : sqft}});

  //     // var priceHDRPhotos = Services.findOne({"sku": "hdrPhotos"}).price;
  //     var priceTwilightPhotos = Services.findOne({"sku": "twilightPhotos"}).price;
  //     var priceTwilightVideo = Services.findOne({"sku": "twilightVideo"}).price;
  //     var priceFullVideo = Services.findOne({"sku": "fullVideo"}).price;
  //     var priceVideoClips = Services.findOne({"sku": "videoClips"}).price;
  //     var priceExteriors = Services.findOne({"sku": "exteriors"}).price;

  //     // var totalPriceHDRPhotos = priceHDRPhotos + areaSurchargeHDRPhotos + sizeSurchargeHDRPhotos;
  //     var totalPriceTwilightPhotos = priceTwilightPhotos + areaSurchargeTwilightPhotos + sizeSurchargeTwilightPhotos;
  //     var totalPriceTwilightVideo = priceTwilightVideo + areaSurchargeTwilightVideo + sizeSurchargeTwilightVideo;
  //     var totalPriceFullVideo = priceFullVideo + areaSurchargeFullVideo + sizeSurchargeFullVideo;
  //     var totalPriceVideoClips = priceVideoClips + areaSurchargeVideoClips + sizeSurchargeVideoClips;
  //     var totalPriceExteriors = priceExteriors + areaSurchargeExteriors;

  //     var priceTable = {
  //       "hdrPhotos" : totalPriceHDRPhotos,
  //       "twilightPhotos" : totalPriceTwilightPhotos,
  //       "fullVideo" : totalPriceFullVideo,
  //       "twilightVideo" : totalPriceTwilightVideo,
  //       "videoClips": totalPriceVideoClips,
  //       "exteriors" : totalPriceExteriors,
  //       "panos" : Services.findOne({"sku": "panos"}).price,
  //       "videoIntro" : Services.findOne({"sku": "videoIntro"}).price,
  //       "videoClosing" : Services.findOne({"sku": "videoClosing"}).price,
  //       "videoVoiceover" : Services.findOne({"sku": "videoVoiceover"}).price,
  //       "tourbuzz" : Services.findOne({"sku": "tourbuzz"}).price,
  //       "tourfactory" : Services.findOne({"sku": "tourfactory"}).price,
  //       "noTour" : Services.findOne({"sku": "noTour"}).price,
  //       "domain" : Services.findOne({"sku": "domain"}).price,
  //       "domainURL" : Services.findOne({"sku": "domainURL"}).price,
  //       "rush" : Services.findOne({"sku": "rush"}).price,
  //       "weekend" : Services.findOne({"sku": "weekend"}).price
  //     };

  //     Session.set('currentPrices', priceTable);
  //     console.log("Price Table:");
  //     console.log(priceTable);

  //   };

  //   getPrice(sqft, area, areaSurchargeTable);

  // };

  // // takes the individual address fields and creates complete address
  // formatCompleteAddress = function(OrderFormContents) {

  //   var completeAddress = "";

  //   if (OrderFormContents.propertyInfo.address2){
  //     completeAddress = (OrderFormContents.propertyInfo.address1 + ", " + OrderFormContents.propertyInfo.address2 + ", " + OrderFormContents.propertyInfo.city + ", " + OrderFormContents.propertyInfo.state + " " + OrderFormContents.propertyInfo.zip);
  //   } else {
  //     completeAddress = (OrderFormContents.propertyInfo.address1 + ", " + OrderFormContents.propertyInfo.city + ", " + OrderFormContents.propertyInfo.state + " " + OrderFormContents.propertyInfo.zip);
  //   };

  //   // console.log("Here is the complete address");
  //   // console.log(completeAddress);
  //   return completeAddress;

  // };

  // formatNames = function(OrderFormContents) {

  //   var formattedNames = { 
  //     agentFullName : (OrderFormContents.customerInfo.agentFirstName + " " + OrderFormContents.customerInfo.agentLastName),
  //     agentFullNameReverse : (OrderFormContents.customerInfo.agentLastName + ", " + OrderFormContents.customerInfo.agentFirstName),
  //     otherFullName : (OrderFormContents.customerInfo.otherFirstName + " " + OrderFormContents.customerInfo.otherLastName),
  //     otherFullNameReverse : (OrderFormContents.customerInfo.otherLastName + ", " + OrderFormContents.customerInfo.otherFirstName)
  //   };

  //   return formattedNames;

  // }

  // buildShoppingCartObject = function( OrderFormContents ) {

  //   // console.log("PropertyInfo Assigned");
  //   ShoppingCartObject.propertyInfo = OrderFormContents.propertyInfo;

  //   // console.log("fullAddress Assigned");
  //   ShoppingCartObject.propertyInfo.fullAddress = formatCompleteAddress(OrderFormContents);

  //   // console.log("customerInfo Assigned");
  //   ShoppingCartObject.customerInfo = OrderFormContents.customerInfo;

  //   // console.log("Formatted customerInfo names Assigned");
  //   ShoppingCartObject.customerInfo = _.extend(ShoppingCartObject.customerInfo, formatNames(OrderFormContents));

  //   // console.log("servicesSelected Assigned");
  //   // ShoppingCartObject.servicesSelected = OrderFormContents.servicesSelected;

  //   // console.log("all info for servicesSelected Assigned");
  //   ShoppingCartObject.servicesSelected = getSelectedItems(OrderFormContents);

  //   ShoppingCartObject.vendorsSelected = OrderFormContents.vendorsSelected;

  //   ShoppingCartObject.discountsApplied = getVendorDiscount(OrderFormContents);

  //   delete ShoppingCartObject.vendorsSelected;

  //   Session.set("totalDiscount", getTotalDiscount(ShoppingCartObject));

  //   getTotalPriceOfSelectedItems(ShoppingCartObject, Session.get("totalDiscount"));

  //   // console.log("This is the totalPrice Session value:");
  //   // console.log(Session.get("totalPrice"));
  //   ShoppingCartObject.totalPrice = Session.get("totalPrice");

  //   // console.log("ShoppingCartObject:");
  //   // console.log(ShoppingCartObject);

  //   Session.set('shoppingCartObjectSession', ShoppingCartObject);
  //   return ShoppingCartObject;

  // };