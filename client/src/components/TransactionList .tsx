import { useEffect, useState } from "react";
import { fetchTransactions } from "../services/api";
import { Transaction } from "../lib/types";
import { Link } from "react-router-dom";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  useEffect(() => {
    // Fetch transactions on mount for the main page
    const getTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    getTransactions();
  }, []);

  if (transactions === null) return;

  const isEmpty = transactions.length <= 0;

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white shadow-md rounded h-screen">
      <h2 className="text-xl font-semibold mb-4">
        Transaction List {isEmpty && "is empty"}{" "}
      </h2>
      {!isEmpty && (
        <table className="table-auto w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Date & Time</th>
              <th className="px-4 py-2 border">Author</th>
              <th className="px-4 py-2 border">Sum</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Comment</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{transaction.dateTime}</td>
                <td className="px-4 py-2 border">{transaction.author}</td>
                <td className="px-4 py-2 border">{transaction.sum}</td>
                <td className="px-4 py-2 border">{transaction.category}</td>
                <td className="px-4 py-2 border">{transaction.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link
        to="/submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
      >
        Add New Transaction
      </Link>
    </div>
  );
};

export default TransactionList;
