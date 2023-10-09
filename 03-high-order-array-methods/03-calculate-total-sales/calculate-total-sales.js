function calculateTotalSalesWithTax(productArr, taxRate) {
    const totalSales = productArr.reduce((sum, product) => product.price * product.quantity + sum, 0);

    const taxAmount = (totalSales * taxRate) / 100;

    const salesWithTax = totalSales + taxAmount;

    return salesWithTax;
}

export default calculateTotalSalesWithTax;
