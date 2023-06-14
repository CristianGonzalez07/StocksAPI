import db from '../lib/db';


export const addStock = async (userID: string, name: string, symbol: string, currency: string) => {
  try {
    const query = `INSERT INTO Stocks(userID, name, symbol, currency) VALUES ('${userID}','${name}','${symbol}', '${currency}');`;
    await db.promise().query(query);
    return "success"
  } catch (err:any) {
    console.error('Error executing the query:', err);
    if(err.code === "ER_DUP_ENTRY") {
      return "alreadyExists"
    }else{
      return "serverError"
    }
  }

};


