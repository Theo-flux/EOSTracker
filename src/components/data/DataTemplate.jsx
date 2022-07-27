import React from 'react'
import { Div, Section } from '../../shared'

const tableHead=["#", "Date", "Time", "Sender", "Receiver", "Quantity of EOS", "USD", "Amount"]

const DataTable = () => {
    return(
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-1 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                    <thead class="bg-white border-b">
                        <tr>
                            {
                                tableHead.map((title, index) => {
                                    return(
                                        <th key={index} scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            {title}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-100 border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

function DataTemplate() {
  return (
    <DataTable/>
  )
}

export default DataTemplate