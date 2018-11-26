import React from 'react';
import ReactTable from 'react-table';
import DeleteIcon from '@material-ui/icons/Delete';

class Table extends React.Component {
	render() {
		return (
            <React.Fragment>
            
                <ReactTable
                    data={[{
                        Created: new Date().getDate()
                    }, {
                        Created: new Date().getDate()
                    }, {
                        Created: new Date().getDate()
                    }, {
                        Created: new Date().getDate()
                    }]}
                    columns={[{
                        Header: 'Created',
                        id: 'created',
                        accessor: 'Created',
                    }, 
                    {
                        Header: 'Living Surface',
                        id: 'Living_surface',
                        accessor: 'title',
                    },
                    {
                        Header: 'Land Surface',
                        id: 'Land_surface',
                        accessor: 'title',
                    },
                    {
                        Header: 'Number of rooms',
                        id: 'Number_of_rooms',
                        accessor: 'title',
                    },
                    {
                        Header: 'Number of parkings',
                        id: 'Number_of_parkings',
                        accessor: 'title',
                    },
                    {
                        Header: '',
                        sortable: false,
                        minWidth: 20,
                        Cell: row => (
                            <DeleteIcon onClick={() => alert(row)} />
                        )
                    }
                    ]}
                    defaultPageSize={5}
                    showPagination={true}
                    className="-striped -highlight"
                />
            </React.Fragment>
        );
	}
}

export default Table;