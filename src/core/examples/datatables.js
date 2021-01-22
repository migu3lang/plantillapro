import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Basic() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
      },
      
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: '$237',
      },
      {
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        date: '2012/10/13',
        salary: '$132',
      },
      {
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: '35',
        date: '2012/09/26',
        salary: '$217',
      },
     
    ],
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}