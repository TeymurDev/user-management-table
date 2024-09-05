import { Column } from 'react-table';
import ColumnFilter from './ColumnFilter';

export const COLUMNS: Column[] = [
  {
    Header: 'Name',
    accessor: 'name',
    Filter: ColumnFilter,
  },
  {
    Header: 'Username',
    accessor: 'username',
    Filter: ColumnFilter,
  },
  {
    Header: 'Email',
    accessor: 'email',
    Filter: ColumnFilter,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    Filter: ColumnFilter,
  },
];
