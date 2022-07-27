import React, {useContext, useState } from 'react';
import { app } from '../../app/appContext';

const tableHead=["#", "Date", "Time", "Sender", "Receiver", "Quantity(EOS)", "Price(USD)", "Amount"];

const DataTable = ({apiData}) => {
    const [count, setCount] = useState(30);

    function htmlToCsv(filename){
        let data = [];
        let rows = document.querySelectorAll("table tr");

        for (let i = 0; i < rows.length; i++){
            let row = [], cols = rows[i].querySelectorAll("td, th");

            for (let j = 0; j < cols.length; j++){
                row.push(cols[j].innerText);
            }

            data.push(row.join(","));
        }
        downloadCSVFile(data.join("\n"), filename);
    }

    function downloadCSVFile(csv, filename){
        let csv_file, download_link;
        csv_file = new Blob([csv], {type: "text/csv"});
        download_link = document.createElement("a");
        download_link.download = filename;
        download_link.href = window.URL.createObjectURL(csv_file);
        download_link.style.display = "none";
        document.body.appendChild(download_link);
        download_link.click();
    }

    return(
        <div className="flex flex-col font-poppins h-[700px]">
            {
                apiData &&
                <div id="export-btn" onClick={() => {
                    
                    htmlToCsv("eos_trx.csv");
                }} className='hover:text-blue-500 cursor-pointer self-end font-poppins flex justify-between items-center w-fit'>
                    <i className="ri-file-download-fill text-2xl mr-2"></i> <p>Download XSL</p>
                </div>
            } 
            <div className="overflow-auto sm:-mx-6 lg:-mx-8">
                <div className="py-1 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table id="table" className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            {
                                tableHead.map((title, index) => {
                                    return(
                                        <th key={index} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            {title}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            apiData?.slice(0, count).map((datum, index) => {
                                const {timestamp, act: {data: {amount, from, to}}} = datum
                                const time = new Date(timestamp.toString()).toLocaleTimeString('en-US', {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
                                const date = new Date(timestamp.toString()).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'});
                                const precision = 100; // 2 decimals
                                const randomnum = Math.floor(Math.random() * (1.3 * precision - 1 * precision) + 1 * precision) / (1*precision);
                                return(
                                    <tr key={index} className={`${(index + 1) % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{date}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{time}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{from}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{to}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{amount}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{(randomnum).toFixed(3)}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{(amount * randomnum).toFixed(3)}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            {
                apiData &&
                <div onClick={() => setCount(prevCount => prevCount += 30)} className='mt-8 w-[100%] cursor-pointer mx-auto max-w-fit py-4 px-8 bg-blue-500 text-xl text-white rounded transition-all duration-500 ease-in-out hover:border hover:border-blue-500 hover:bg-transparent hover:text-blue-500'>Show More</div>
            }
        </div>
    )
}

function DataTemplate() {
    const {apiData} = useContext(app)

    return (
        <section className='flex flex-col mt-8'>
            <DataTable apiData={apiData}/>
        </section>
    )
}

export default DataTemplate