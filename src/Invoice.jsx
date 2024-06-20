// src/components/InvoiceForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const InvoiceForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    sellerName: "",
    sellerAddress: "",
    sellerCity: "",
    sellerState: "",
    sellerPincode: "",
    sellerPAN: "",
    sellerGST: "",
    placeOfSupply: "",
    billingName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingPincode: "",
    billingCode: "",
    shippingName: "",
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingPincode: "",
    shippingCode: "",
    placeOfDelivery: "",
    orderNo: "",
    orderDate: "",
    invoiceNo: "",
    invoiceDetails: "",
    invoiceDate: "",
    reverseCharge: "No",
    items: [{ description: "", unitPrice: 0, quantity: 0, discount: 0 }],
    signature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const items = [...formData.items];
    items[index][name] = value;
    setFormData({ ...formData, items });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { description: "", unitPrice: 0, quantity: 0, discount: 0 },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100">
      {/* Seller Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Seller Name</label>
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller Address</label>
          <input
            type="text"
            name="sellerAddress"
            value={formData.sellerAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller City</label>
          <input
            type="text"
            name="sellerCity"
            value={formData.sellerCity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller State</label>
          <input
            type="text"
            name="sellerState"
            value={formData.sellerState}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller Pincode</label>
          <input
            type="text"
            name="sellerPincode"
            value={formData.sellerPincode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller PAN</label>
          <input
            type="text"
            name="sellerPAN"
            value={formData.sellerPAN}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Seller GST</label>
          <input
            type="text"
            name="sellerGST"
            value={formData.sellerGST}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Place of Supply</label>
          <input
            type="text"
            name="placeOfSupply"
            value={formData.placeOfSupply}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Billing Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Billing Name</label>
          <input
            type="text"
            name="billingName"
            value={formData.billingName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Billing Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Billing City</label>
          <input
            type="text"
            name="billingCity"
            value={formData.billingCity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Billing State</label>
          <input
            type="text"
            name="billingState"
            value={formData.billingState}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Billing Pincode</label>
          <input
            type="text"
            name="billingPincode"
            value={formData.billingPincode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Billing Code</label>
          <input
            type="text"
            name="billingCode"
            value={formData.billingCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Shipping Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Shipping Name</label>
          <input
            type="text"
            name="shippingName"
            value={formData.shippingName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Shipping City</label>
          <input
            type="text"
            name="shippingCity"
            value={formData.shippingCity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Shipping State</label>
          <input
            type="text"
            name="shippingState"
            value={formData.shippingState}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Shipping Pincode</label>
          <input
            type="text"
            name="shippingPincode"
            value={formData.shippingPincode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Shipping Code</label>
          <input
            type="text"
            name="shippingCode"
            value={formData.shippingCode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Order No</label>
          <input
            type="text"
            name="orderNo"
            value={formData.orderNo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Order Date</label>
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Invoice No</label>
          <input
            type="text"
            name="invoiceNo"
            value={formData.invoiceNo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Invoice Details</label>
          <input
            type="text"
            name="invoiceDetails"
            value={formData.invoiceDetails}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Invoice Date</label>
          <input
            type="date"
            name="invoiceDate"
            value={formData.invoiceDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Reverse Charge</label>
          <select
            name="reverseCharge"
            value={formData.reverseCharge}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>

      {/* Item Details */}
      <div>
        <h3 className="text-lg font-semibold">Item Details</h3>
        {formData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e) => handleItemChange(index, e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Unit Price</label>
              <input
                type="number"
                name="unitPrice"
                value={item.unitPrice}
                onChange={(e) => handleItemChange(index, e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label>Discount</label>
              <input
                type="number"
                name="discount"
                value={item.discount}
                onChange={(e) => handleItemChange(index, e)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Add Item
        </button>
      </div>

      {/* Signature */}
      <div>
        <label>Signature Image</label>
        <input
          type="file"
          name="signature"
          onChange={(e) =>
            setFormData({ ...formData, signature: e.target.files[0] })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        Generate Invoice
      </button>
    </form>
  );
};

InvoiceForm.propTypes = {
  onGenerate: PropTypes.func.isRequired,
};

export default InvoiceForm;
