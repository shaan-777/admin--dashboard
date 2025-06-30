// import React from 'react'

// const StatsCards = ({ stats }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//       {stats.map((stat, index) => (
//         <div key={index} className={`${stat.color} rounded-lg p-6 text-white`}>
//           <h3 className="text-lg font-medium mb-2">{stat.title}</h3>
//           <p className="text-4xl font-bold">{stat.value}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default StatsCards
import React from 'react'

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} rounded-xl p-4 sm:p-6 text-white`}
        >
          <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">
            {stat.title}
          </h3>
          <p className="text-3xl sm:text-4xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
