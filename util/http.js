import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-bcd22-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};
