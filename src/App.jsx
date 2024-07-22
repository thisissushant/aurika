
import { useState } from "react";
import InvoiceForm from "./Invoice";
import Invoice from "./invoice1";

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const handleGenerate = (data) => {
    setInvoiceData(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Invoice Generator</h1>
      <InvoiceForm onGenerate={handleGenerate} />
      {invoiceData && <Invoice data={invoiceData} />}
    </div>
  );
};

export default App;
