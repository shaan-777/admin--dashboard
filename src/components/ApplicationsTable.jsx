// ====================
import React from 'react'
import Table from './common/Table'
import { applicationColumns, applicationData } from '../data/applicationsData'

const ApplicationsTable = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-purple-800 mb-6">Applications</h3>
      <Table 
        columns={applicationColumns}
        data={applicationData}
        emptyMessage="No applications found"
      />
    </div>
  )
}

export default ApplicationsTable