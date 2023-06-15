import { ResultSetHeader } from 'mysql2';
import db from '../lib/db';
interface Stock {
  name:string
  symbol:string
  currency:string
}
export const addStock = async (userID: string, name: string, symbol: string, currency: string) => {
  try {
    const query = `INSERT INTO Stocks(userID, name, symbol, currency) VALUES ('${userID}','${name}','${symbol}', '${currency}');`;
    await db.promise().query(query);
    return "created"
  } catch (err:any) {
    console.error('Error executing the query:', err);
    if(err.code === "ER_DUP_ENTRY") {
      return "alreadyExists"
    }else{
      return "serverError"
    }
  }
};

export const removeStock = async (userID: string, stockID: string) => {
  interface DeleteResult {
    affectedRows?: number;
  }

  try {
    const query = `DELETE FROM Stocks WHERE id = '${stockID}' AND userID = '${userID}';`;
    const [result] = await db.promise().query(query);
    if ((result as ResultSetHeader).affectedRows === 0) {
      return "notFound";
    }
    return "success"
  } catch (err:any) {
    console.error('Error executing the query:', err);
    return "serverError"
  }
};

export const getStocks = async (userID: string) => {
  let queryResults: any;
  try {
    const query = `SELECT id, name, symbol, currency FROM Stocks WHERE userID = '${userID}';`;
    const [rows] = await db.promise().query(query);
    queryResults = rows;
    const stocks: Stock[] = queryResults;
    return stocks
  } catch (err:any) {
    console.error('Error executing the query:', err);
    return "serverError"
  }
};


