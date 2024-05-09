document.getElementById("finance-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let income = parseInt(document.getElementById("income").value);
    let expense = parseInt(document.getElementById("expense").value);
    let saving = income - expense;

    document.getElementById("income-td").innerHTML = "<span>" + income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</span>";
    document.getElementById("expense-td").innerHTML = "<span>" + expense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</span>";
    document.getElementById("saving-td").innerHTML = "<span>" + saving.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</span>";

    document.getElementById("income").value = "";
    document.getElementById("expense").value = "";
});