var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };


  Expense.prototype.calculatePercentages = function(totalIncome) {
    
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
    
  }

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(current) {
      sum += current.value;
    });
    data.totals[type] = sum;
  }

  var data = {
    allItems: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0
    },
    budget: 0,
    percentage: -1
  };
  
  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      
      //create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      // create new item
      if (type === 'expense') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'income') {
        newItem = new Income(ID, des, val);
      }
      
      // push it into data structure
      data.allItems[type].push(newItem);
      
      // return it
      return newItem;

    },

    deleteItem: function(type, id) {
      var ids, index;

      var ids = data.allItems[type].map(function(current){
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }

    },

    calculateBudget: function() {

      // calculate total income and expenses
      calculateTotal('expense');
      calculateTotal('income');

      // calculate the budget: income - expenses
      data.budget = data.totals.income - data.totals.expense;

      // calculate the percentage of income that we spent
      if (data.totals.income > 0) {
        data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
      } else {
        data.percentage = -1;
      }
      
      

    },

    calculatePercentages: function () {
      data.allItems.expense.forEach(function(current) {
        current.calculatePercentages(data.totals.income);
      });
    },

    getPercentages: function() {
      var allPercentages = data.allItems.expense.map(function(current) {
        return current.getPercentage();
      });
      return allPercentages;
    },

    getBudget: function(){
      return {
        budget: data.budget,
        totalIncome: data.totals.income,
        totalExpense: data.totals.expense,
        percentage: data.percentage
      }
    },

    testing: function() {
      console.log(data);
    }
  };


})();


var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage'
  }

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;
      // Create HTML string with placeholder text
      if (type === 'income') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      // Replace the placeholder text with actual data
      newHTML = html.replace('%id%',obj.id);
      newHTML = newHTML.replace('%description%',obj.description);
      newHTML = newHTML.replace('%value%',obj.value);

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },

    deleteListItem: function (selectorID) {
      
      var element = document.getElementById(selectorID);
      element.parentNode.removeChild(element);

    },

    clearFields: function() {
      var fields, fieldsArray;
      
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArray[0].focus();
    },

    displayBudget: function(obj) {

      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalIncome;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExpense;
      
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }

    },

    displayPercentages: function(percentages) {

      var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

      console.log(fields);

      var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };
      
      nodeListForEach(fields, function(current, index) {
        
        if (percentages[index] > 0 ) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
        

      });

    },

    getDOMstrings: function() {
      return DOMstrings;
    }

  };

})();


var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }

    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

  }

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetController.calculateBudget();

    // 2. Return the budget
    var budget = budgetController.getBudget();

    // 3. Display budget on the UI
    UIController.displayBudget(budget);
  }

  var updatePercentages = function() {

    // 1. Calculate percentages
    budgetController.calculatePercentages();

    // 2. Read percentages from the budget controller
    var percentages = budgetController.getPercentages();

    // 3. Update the UI
    UIController.displayPercentages(percentages);

  }

  var ctrlAddItem = function() {
    var input, newItem;

    // 1. Get field input data
    input = UICtrl.getinput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UIController.addListItem(newItem, input.type);
      
      UIController.clearFields();

      updateBudget();
      updatePercentages();
    }

  }

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, id;

    //this is relying on the DOM structure being hard coded - not a best practice
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {

      splitID = itemID.split('-');
      type = splitID[0];
      id = parseInt(splitID[1]);

      // 1. delete the item from the data structure
      budgetController.deleteItem(type, id);

      // 2. delete the item from the UI
      UIController.deleteListItem(itemID);
      
      updateBudget();
      updatePercentages();
    }

  }

  return {
    init: function() {
      console.log('Application has started.');
      UIController.displayBudget({
        budget: 0,
        totalIncome: 0,
        totalExpense: 0,
        percentage: 0
      });
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();