//coding challenge 4

// const bill= 300
// if (bill>=50 && bill <=300) {console.log ( `the bill is ${(bill*.15)+bill} dollars`)} 
//tip calculator script 
const bill= 95


 const tip= (bill>=50 && bill <=300 ? (`${(bill*.15)}`) : (`${bill*.20}`));

 console.log(`the tip was ${tip} for the bill of ${bill} dollars, which brings the total to ${Number((bill))+Number((tip))}!`);
 

