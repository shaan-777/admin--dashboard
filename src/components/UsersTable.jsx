// // src/components/UsersTable.jsx
// // ====================
// import React from 'react'
// import Table from './common/Table'
// import { userColumns, userData } from '../data/usersData'

// const UsersTable = () => {
//   return (
//     <div className="mb-12">
//       <h3 className="text-2xl font-bold text-purple-800 mb-6">Users Management</h3>
//       <Table 
//         columns={userColumns}
//         data={userData}
//         emptyMessage="No users found"
//       />
//     </div>
//   )
// }

// export default UsersTable
import React from 'react'
import Table from './common/Table'
import { userColumns, userData } from '../data/usersData'

const UsersTable = () => {
  return (
<<<<<<< HEAD
    <div className="mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 sm:mb-6">
        Users Management
      </h3>
      <Table 
        columns={userColumns}
        data={userData}
        emptyMessage="No users found"
      />
=======
    <div className="mb-8 sm:mb-12">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 sm:mb-6">
        Users Management
      </h3>
      
      <div className="overflow-x-auto w-full">
        <Table 
          columns={userColumns}
          data={userData}
          emptyMessage="No users found"
        />
      </div>
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
    </div>
  )
}

export default UsersTable
