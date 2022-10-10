import { format } from 'date-fns'

export const COLUMNS = [

  {
    Header: 'Company',
    accessor: 'company',
    sticky: 'left'
  },
  {
    Header: 'Position',
    accessor: 'position',
    sticky: 'left'
  },
  {
    Header: 'Link',
    accessor: 'job_link'
  },
  {
    Header: 'Stage',
    accessor: 'stage'
  },
  {
    Header: 'Next Step',
    accessor: 'next_step'
  },
  {
    Header: 'Date Found',
    accessor: 'date_found',
    Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
    }
  },
  {
    Header: 'Date Applied',
    accessor: 'date_applied',
    Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
    }
  },
  {
    Header: 'Notes',
    accessor: 'notes'
  },
]