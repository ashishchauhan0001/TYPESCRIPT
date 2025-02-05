type cardNumber={
    cardnumber:Number
  }
  
  type cardName={
    cardName:string
  }
  
  type cardDate={
    carddate:string
  }
  
  // Types exist only at compile-time → No impact on JS output.
  // a way to use the pre existed data types in a big project so we dont need to modify the previous data types but not very recommended 
  
  type CreditCardDetails= cardNumber & cardName & cardDate & {
    cvv : string
  }

  const myCard: CreditCardDetails = {
    cardnumber: 1234567890123456,
    cardName: "IronMan",
    carddate: "12/25",
    cvv: "123"
  };
  
  console.log(myCard);
  