import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];

        if (file) {
            try {
                const arrayBuffer = await file.arrayBuffer();
                const workBook = XLSX.read(arrayBuffer, { type: "array" });
                const sheetName = workBook.SheetNames[0];
                const workSheet = workBook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(workSheet);
                setData(jsonData);
                setError(null);
            } catch (err) {
                setError(
                    "Failed to read the Excel file. Please make sure the file is valid."
                );
                setData([]);
            }
        }
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div className="form-group col-lg-5 col-md-6 col-sm-12 col-12 mx-auto">
                        <label>Excel File Reader</label>
                        <input
                            className="form-control"
                            accept=".xlsx, .xls"
                            type="file"
                            onChange={handleFileUpload}
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {data.length === 0 ? (
                        <p className="my-4 text-center text-danger fs-3">
                            Please upload your Excel data
                        </p>
                    ) : (
                        <div className="table-responsive my-5">
                            <table className="table table-striped table-bordered table-hover table-sm" style={{whiteSpace: "nowrap"}}>
                                <thead className="table-primary">
                                <tr>
                                    {Object.keys(data[0]).map((key) => (
                                        <th key={key} className="text-nowrap">
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        {Object.values(row).map((value, idx) => (
                                            <td key={idx} className="text-nowrap">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExcelComponent;
