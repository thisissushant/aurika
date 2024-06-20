// src/components/Invoice.jsx
import {} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PropTypes from "prop-types";

const Invoice = ({ data }) => {
  const generatePDF = () => {
    const input = document.getElementById("invoice");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(`${data.invoiceNo}.pdf`);
    });
  };

  const calculateAmounts = (item) => {
    const netAmount = item.unitPrice * item.quantity - item.discount;
    const taxRate = 18;
    const taxAmount = (netAmount * taxRate) / 100;
    const totalAmount = netAmount + taxAmount;
    return { netAmount, taxAmount, totalAmount };
  };

  return (
    <div
      id="invoice"
      className="p-4 bg-white border border-gray-300 rounded shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <img src="/path/to/logo.png" alt="Brand Logo" className="w-32" />
        <h2 className="text-2xl font-bold">Invoice</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Seller Details</h3>
          <p>{data.sellerName}</p>
          <p>{data.sellerAddress}</p>
          <p>
            {data.sellerCity}, {data.sellerState}, {data.sellerPincode}
          </p>
          <p>PAN: {data.sellerPAN}</p>
          <p>GST: {data.sellerGST}</p>
        </div>
        <div>
          <h3 className="font-semibold">Place of Supply</h3>
          <p>{data.placeOfSupply}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold">Billing Details</h3>
          <p>{data.billingName}</p>
          <p>{data.billingAddress}</p>
          <p>
            {data.billingCity}, {data.billingState}, {data.billingPincode}
          </p>
          <p>State/UT Code: {data.billingCode}</p>
        </div>
        <div>
          <h3 className="font-semibold">Shipping Details</h3>
          <p>{data.shippingName}</p>
          <p>{data.shippingAddress}</p>
          <p>
            {data.shippingCity}, {data.shippingState}, {data.shippingPincode}
          </p>
          <p>State/UT Code: {data.shippingCode}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold">Order Details</h3>
          <p>Order No: {data.orderNo}</p>
          <p>Order Date: {data.orderDate}</p>
        </div>
        <div>
          <h3 className="font-semibold">Invoice Details</h3>
          <p>Invoice No: {data.invoiceNo}</p>
          <p>Invoice Details: {data.invoiceDetails}</p>
          <p>Invoice Date: {data.invoiceDate}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Reverse Charge: {data.reverseCharge}</h3>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Items</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Description</th>
              <th className="py-2">Unit Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Discount</th>
              <th className="py-2">Net Amount</th>
              <th className="py-2">Tax Amount</th>
              <th className="py-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => {
              const { netAmount, taxAmount, totalAmount } =
                calculateAmounts(item);
              return (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.description}</td>
                  <td className="border px-4 py-2">{item.unitPrice}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">{item.discount}</td>
                  <td className="border px-4 py-2">{netAmount.toFixed(2)}</td>
                  <td className="border px-4 py-2">{taxAmount.toFixed(2)}</td>
                  <td className="border px-4 py-2">{totalAmount.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Total</h3>
        <p>Amount in words: {/* Convert total amount to words */}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Signature</h3>
        <img
          src={URL.createObjectURL(data.signature)}
          alt="Signature"
          className="w-32"
        />
        <p>For {data.sellerName}:</p>
        <p>Authorised Signatory</p>
      </div>
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        Download PDF
      </button>
    </div>
  );
};

Invoice.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Invoice;
