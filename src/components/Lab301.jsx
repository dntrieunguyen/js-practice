import React, { Component } from 'react';

const expenses = [
   {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
   },
   {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
   },
   {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
   },
   {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
   },
];
const months = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
];

// Cập nhật số năm mới vào select Year option
let yearArr = ['None', 'Select All'];
expenses.forEach(item => {
   const year = item.date.getFullYear();
   if (!yearArr.includes(year)) {
      yearArr.push(year);
   }
});

export default class Lab301 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: expenses,
         txtTitle: '',
         txtAmount: '',
         txtDate: '',
         selectYear: yearArr,
         renderData: [],
         isHidden: true,
      };
   }

   //    Xu ly su kien onChange
   onHandleChange = e => {
      const { name, value } = e.target;

      this.setState(prevState => ({ ...prevState, [name]: value }));
   };

   //    Xu ly su kien add/submit
   onHandleSubmit = e => {
      e.preventDefault();
      const { txtTitle, txtAmount, txtDate, data, selectYear } = this.state;

      //   Ham valid du lieu
      function validation(txtTitle, txtAmount) {
         let valid = true;
         if (txtTitle.trim().length === 0) {
            alert('Please Enter Input Title!');
            valid = false;
         }

         if (txtAmount.trim().length === 0) {
            alert('Please Enter Input Amount!');
            valid = false;
         }
         if (txtDate.trim().length === 0) {
            alert('Please Enter Input Date!');
            valid = false;
         }
         return valid;
      }

      //   valid du lieu
      let valid = validation(txtTitle, txtAmount);

      //   add event khi valid true
      if (valid) {
         // Tạo object để lưu thông tin mới
         const newExpense = {
            id: `{e${data.length + 1}}`,
            title: txtTitle,
            amount: parseFloat(txtAmount),
            date: new Date(txtDate),
         };

         let year = newExpense.date.getFullYear();
         if (!selectYear.includes(year)) {
            this.setState({
               selectYear: [...selectYear, year],
            });
         }
         // Cập nhật cho state
         this.setState({
            // Thêm newExpense vào data
            data: [...data, newExpense],

            // reset lại các trường input
            txtTitle: '',
            txtAmount: '',
            txtDate: '',
         });
         console.log(newExpense);
         alert('Add new expense success');
      }
   };

   onUpdate = id => {
      // Lấy thông tin mới cho title, ví dụ: "New Title"
      const newTitle = 'Updated!';

      // Tạo một bản sao của mảng data
      const updatedData = [...this.state.data];

      // Tìm chỉ mục của item với id tương ứng
      const itemIndex = updatedData.findIndex(item => item.id === id);

      // Kiểm tra xem item có tồn tại trong mảng không
      if (itemIndex !== -1) {
         // Cập nhật title của item tương ứng
         updatedData[itemIndex].title = newTitle;

         // Cập nhật state với mảng data đã được cập nhật
         this.setState({ data: updatedData });
      }
   };

   handleFilterChange = e => {
      const selectedYear = e.target.value;
      let { renderData, selectYear } = this.state;

      let yArr = selectYear.toString();

      renderData = [...this.state.data];

      if (!yArr.includes(selectedYear)) {
         alert('Found no expenses.');
      }

      if (selectedYear === 'Select All') {
         this.setState({ renderData: [...this.state.data] });
      } else {
         let filteredata = renderData.filter(
            item => item.date.getFullYear().toString() === selectedYear,
         );
         this.setState({ renderData: filteredata });
      }
   };

   onHandleBtnCancel = e => {
      e.preventDefault();
      const { isHidden } = this.state;
      this.setState({
         isHidden: !isHidden,
      });
      console.log('click Cancel >>>', isHidden);
   };

   onHandleBtnExpand = e => {
      e.preventDefault();
      const { isHidden } = this.state;
      this.setState({
         isHidden: !isHidden,
      });
      console.log('click expand');
   };

   render() {
      // destructing state
      const { data, renderData, selectYear } = this.state;
      // Gán lại updateData để render
      const updateData = renderData;
      const { isHidden } = this.state;
      const isWatch = !isHidden;

      console.log(updateData.length);
      return (
         <div className="myBackground">
            <div className="center">
               <form className="extenseForm">
                  {isWatch && (
                     <div className="expandForm">
                        <div className="inputField">
                           {/* Title */}
                           <div className="formInput">
                              <label
                                 htmlFor=""
                                 className="inputTitle"
                                 name="txtTitle"
                              >
                                 Title
                              </label>
                              <input
                                 value={this.state.txtTitle}
                                 onChange={this.onHandleChange}
                                 type="text"
                                 name="txtTitle"
                                 className="txtTitle"
                              />
                           </div>
                           {/* Amount */}
                           <div className="formInput">
                              <label
                                 htmlFor=""
                                 className="inputTitle"
                                 name="txtAmount"
                              >
                                 Amount
                              </label>
                              <input
                                 value={this.state.txtAmount}
                                 onChange={this.onHandleChange}
                                 type="number"
                                 name="txtAmount"
                                 className="txtAmount"
                                 min={0}
                                 step={0.01}
                              />
                           </div>
                           {/* Date */}
                           <div className="formInput">
                              <label
                                 htmlFor=""
                                 className="inputTitle"
                                 name="txtDate"
                              >
                                 Date
                              </label>
                              <input
                                 value={this.state.txtDate}
                                 onChange={this.onHandleChange}
                                 onBlur={this.onHandleChange}
                                 type="date"
                                 name="txtDate"
                                 className="txtDate"
                              />
                           </div>
                        </div>
                        {/* Button Add */}
                        <button
                           type="submit"
                           className="formBtn"
                           onClick={this.onHandleSubmit}
                        >
                           Add Expense
                        </button>
                        {/* Button cancel */}
                        <button
                           className="formBtnCancel"
                           onClick={this.onHandleBtnCancel}
                        >
                           Cancel
                        </button>
                     </div>
                  )}
                  {isHidden && (
                     <button
                        className="formBtnExpand"
                        onClick={this.onHandleBtnExpand}
                     >
                        Add New Expense
                     </button>
                  )}
               </form>
               <div className="boxContent">
                  <div className="expenseFilter">
                     <h2 className="filterTitle">Filter by Year</h2>
                     <select
                        name="selectYear"
                        className="sltYBtn"
                        onChange={this.handleFilterChange}
                     >
                        {selectYear.map((item, index) => (
                           <option key={index} value={item}>
                              {item}
                           </option>
                        ))}
                        <option value="2000">2030</option>
                     </select>
                  </div>

                  {updateData.map(item => (
                     <div className="expenseItem" key={item.id}>
                        <div className="expenseItemDate">
                           <p className="expenseItemDateM">
                              {months[item.date.getMonth()]}
                           </p>
                           <p className="expenseItemDateY">
                              {item.date.getFullYear()}
                           </p>
                           <p className="expenseItemDateD">
                              {item.date.getDate()}
                           </p>
                        </div>
                        <div className="expenseItemTitle">{item.title}</div>
                        <div className="expenseItemPrice">{`$${item.amount}`}</div>
                        <button
                           className="btnUpdate"
                           onClick={() => this.onUpdate(item.id)}
                        >
                           Change <br /> Title
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}
