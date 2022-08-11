import React, { useContext } from 'react';
import { app } from '../../app/appContext';
import { timeStampToDate, timeStampToTime, dateFromPolyTimestamp, dateFromEosTimestamp } from '../../helpers/timeStampConverter';
import htmlToCsv from '../../helpers/htmlToCsv';

const tableHead=["#", "Date", "Time", "Sender", "Receiver", "Quantity(EOS)", "Price(USD)", "Amount"];

const DataTable = ({apiData, polyPrices}) => {

    return(
        <div className="flex flex-col font-poppins h-[700px]">
            {
                apiData ?
                polyPrices ?
                <div id="export-btn" onClick={() => {
                    htmlToCsv("eos_trx.csv");
                    window.location.reload();
                }} className='hover:text-blue-500 cursor-pointer font-poppins flex justify-center items-center'>
                    <i className="ri-file-download-fill text-2xl mr-2"></i> <p>Download XSL</p>
                </div>:
                null:null
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
                            apiData?.map((datum, index) => {
                                const {timestamp, c, act: {data: {amount, from, to}}} = datum

                                const time = timeStampToTime(timestamp)
                                const date = timeStampToDate(timestamp)
                                

                                return(
                                    <tr key={index} className={`${(index + 1) % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b`}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{date}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{time}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{from}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{to}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{amount}</td>
                                        <td className="text-sm text-green-600 font-light px-6 py-4 whitespace-nowrap">{c?.toFixed(2)}</td>
                                        <td className="text-sm text-blue-600 font-light px-6 py-4 whitespace-nowrap">{(amount * c?.toFixed(3)).toFixed(2)}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

function DataTemplate() {
    const {apiData, filterString, polyPrices} = useContext(app)
    const filteredApiData = apiData?.filter(data => data?.act?.data.from === filterString)


    const mergeByDate = (a1, a2) =>
    a1?.map(itm => ({
        ...a2?.find((item) => (dateFromPolyTimestamp(item.t) === dateFromEosTimestamp(itm.timestamp)) && item),
        ...itm
    }));

    const fData = mergeByDate(filteredApiData, polyPrices)

    // console.log(mergeByDate(filteredApiData, polyPrices))
    // console.log(`polygon`,typeof(dateFromPolyTimestamp(`2022-08-10T18:11:01.500`)),(dateFromPolyTimestamp(`2022-08-10T18:11:01.500`)))
    // console.log(`eos`,typeof(dateFromEosTimestamp(`2022-08-10T18:11:01.500`)),(dateFromEosTimestamp(`2022-08-10T18:11:01.500`)))

    // console.log((dateFromEosTimestamp(`2022-08-10T18:11:01.500`)) === (dateFromPolyTimestamp(`2022-08-10T18:11:01.500`)))

    // console.log(polyPrices)

    // console.log(`polygon`,typeof(dateFromPolyTimestamp(1660133580000)),(dateFromPolyTimestamp(1660133580000)))
    // console.log(`eos`,typeof(dateFromEosTimestamp("2022-08-10T13:13:39.500")),(dateFromEosTimestamp("2022-08-10T13:13:39.500")))
    
    return (
        <section className='flex flex-col mt-8'>
            <DataTable apiData={fData} polyPrices={polyPrices}/>
        </section>
    )
}

export default DataTemplate