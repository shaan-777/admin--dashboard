// import React from 'react'

// const Table = ({ columns, data, emptyMessage }) => {
//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <table className="w-full">
//         <thead className="bg-gray-50">
//           <tr>
//             {columns.map((column) => (
//               <th
//                 key={column}
//                 className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 {column}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {data && data.length > 0 ? (
//             data.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((cell, cellIndex) => (
//                   <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {(() => {
//                       const value = typeof cell === 'string' ? cell.toLowerCase() : '';

//                       // Status Badges
//                       if (['approved', 'under review', 'pending'].includes(value)) {
//                         const color =
//                           value === 'approved'
//                             ? 'bg-green-100 text-green-800'
//                             : value === 'under review'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-red-100 text-red-800';
//                         return (
//                           <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
//                             {cell}
//                           </span>
//                         );
//                       }

//                       // Payment or Process Status Badges
//                       if (['paid', 'completed'].includes(value)) {
//                         return (
//                           <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
//                             {cell}
//                           </span>
//                         );
//                       }

//                       if (value === 'processing') {
//                         return (
//                           <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
//                             {cell}
//                           </span>
//                         );
//                       }

//                       if (value === 'pending') {
//                         return (
//                           <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
//                             {cell}
//                           </span>
//                         );
//                       }

//                       // Receipt Download Link
//                       if (value === 'download') {
//                         return (
//                           <a href="#" className="text-blue-600 hover:underline font-medium">
//                             {cell}
//                           </a>
//                         );
//                       }

//                       return cell;
//                     })()}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
//                 {emptyMessage}
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Table
import React from 'react'

const Table = ({ columns, data, emptyMessage }) => {
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 sm:px-6 py-4 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data && data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-900">
                    {(() => {
                      const value = typeof cell === 'string' ? cell.toLowerCase() : ''

                      // Status Badges
                      if (['approved', 'under review', 'pending'].includes(value)) {
                        const color =
                          value === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : value === 'under review'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        return (
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
                            {cell}
                          </span>
                        )
                      }

                      // Payment or Process Status Badges
                      if (['paid', 'completed'].includes(value)) {
                        return (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                            {cell}
                          </span>
                        )
                      }

                      if (value === 'processing') {
                        return (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                            {cell}
                          </span>
                        )
                      }

                      if (value === 'pending') {
                        return (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                            {cell}
                          </span>
                        )
                      }

                      // Receipt Download Link
                      if (value === 'download') {
                        return (
                          <a href="#" className="text-blue-600 hover:underline font-medium">
                            {cell}
                          </a>
                        )
                      }

                      return cell
                    })()}
                  </td>
                ))}
              </tr>
            ))
          ) : (
=======
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Responsive wrapper */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[500px]">
          <thead className="bg-gray-50">
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data && data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                      {(() => {
                        const value = typeof cell === 'string' ? cell.toLowerCase() : '';

                        if (['approved', 'under review', 'pending'].includes(value)) {
                          const color =
                            value === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : value === 'under review'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800';
                          return (
                            <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${color}`}>
                              {cell}
                            </span>
                          );
                        }

                        if (['paid', 'completed'].includes(value)) {
                          return (
                            <span className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-green-100 text-green-800">
                              {cell}
                            </span>
                          );
                        }

                        if (value === 'processing') {
                          return (
                            <span className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-yellow-100 text-yellow-800">
                              {cell}
                            </span>
                          );
                        }

                        if (value === 'pending') {
                          return (
                            <span className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-red-100 text-red-800">
                              {cell}
                            </span>
                          );
                        }

                        if (value === 'download') {
                          return (
                            <a href="#" className="text-blue-600 hover:underline font-medium">
                              {cell}
                            </a>
                          );
                        }

                        return cell
                      })()}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 sm:px-6 py-12 text-center text-gray-500 text-sm">
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
