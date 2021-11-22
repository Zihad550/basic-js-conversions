
///////////////////////////////////////////////////////////
///////////////////// seer to mon //////////////////////
//////////////////////////////////////////////////////////

function seerToMon(seer) {
  // checks the input type
  if (typeof seer != 'number') {
    return 'Please! give number as input';
  } 
  else if (seer <= 1) {
    return 'Please! give positive number greater than 0 as input';
  } 
  else {
    // sum of input
    const mon = seer / 40;
    return mon;
  }
}


///////////////////////////////////////////////////////////
///////////////////// total sales  //////////////////////
//////////////////////////////////////////////////////////

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtQuantityType = typeof shirtQuantity;
  const pantQuantityType = typeof pantQuantity;
  const shoeQuantityType = typeof shoeQuantity;
  const totalQuantity = shirtQuantity + pantQuantity + shoeQuantity;
  
  // checks the input type
  if (shirtQuantityType != 'number' || pantQuantityType != 'number' || shoeQuantityType != 'number') {
    return 'Please! give number as input';
  } 
  else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
    return 'Please! give positive number as input';
  } 
  else if (totalQuantity == 0) {
    return 'Please! give a positive number greater than 0, for one of the items ';
  } 
  else if (totalQuantity != parseInt(totalQuantity)) {
    return 'please! give integer number';
  } 
  else {
  //  sum of input

    // items price
    let shirtPrice = 100;
    let pantPrice = 200;
    let shoePrice = 500;

    // items total price
    let totalShirtPrice = shirtPrice * shirtQuantity;
    let totalPantPrice = pantPrice * pantQuantity;
    let totalShoePrice = shoePrice * shoeQuantity;
    // total price
    const total = totalShirtPrice + totalPantPrice + totalShoePrice;
    return total;

  }

}



///////////////////////////////////////////////////////////
///////////////////// delivery cost //////////////////////
//////////////////////////////////////////////////////////

function deliveryCost(itemsQuantity) {

  // checks the input type
  if (typeof itemsQuantity != 'number') {
    return 'Please! give number as input';
  } 
  else if (itemsQuantity <= 0) {
    return 'Please! give positive number greater than 0';
  } 
  else if (itemsQuantity != parseInt(itemsQuantity)) {
    return 'please! give integer number';
  } 
  else {
     // sum of input
    if (itemsQuantity <= 100) {
      const itemsDeliveryCost = itemsQuantity * 100;
      return itemsDeliveryCost;
    } 
     else if (itemsQuantity <= 200) {
      const first100ItemsCost = 100 * 100;
      const remainedItems = itemsQuantity - 100;
      const remainedItemsCost = remainedItems * 80;
      const itemsDeliveryCost = first100ItemsCost + remainedItemsCost;
      return itemsDeliveryCost;
    }
     else {
      const first100ItemsCost = 100 * 100;
      const second100ItemsCost = 100 * 80;
      const remainedItems = itemsQuantity - 200;
      const remainedItemsCost = remainedItems * 50;
      const itemsDeliveryCost = first100ItemsCost + second100ItemsCost + remainedItemsCost;
      return itemsDeliveryCost;
    }
  }
}


///////////////////////////////////////////////////////////
///////////////////// perfectFriend //////////////////////
//////////////////////////////////////////////////////////

function perfectFriend(friends) {

  for (const friend of friends) {
    // checks the input type
    if(typeof friend != 'string'){
      return 'Please! give a string';
    }
    else{ 
      // checks which is your perfect friend
     if (friend.length == 5) {
      return friend;
    }
  }
  }
}