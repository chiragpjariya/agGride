import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { useState } from 'react';
import { themeQuartz } from "ag-grid-community";
// import { themeBalham } from 'ag-grid-community';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get('https://dummyjson.com/posts').then((res) => res.data.posts)
  })

  const myTheme = themeQuartz.withParams({
    spacing: 2,
    foregroundColor: 'rgb(14, 68, 145)',
    backgroundColor: 'rgb(241, 247, 255)',
    headerBackgroundColor: 'rgb(228, 237, 250)',
    rowHoverColor: 'rgb(216, 226, 255)',
  });




  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,  // Adds a checkbox to the header for selecting all rows
      checkboxSelection: true,  // Adds a checkbox to each row
      width: 50,
      // Set a fixed width for the checkbox column

    },
    {
      headerName: 'Name & Country',
      height: 80,
      children: [
        { field: 'title' },
        { field: 'body' }
      ]
    },
    { field: 'id', headerName: 'ID', sortable: true, filter: true },
    { field: 'title', headerName: 'Title', sortable: true, filter: true },
    { field: 'body', headerName: 'Body', sortable: true, filter: true },
    {
      field: 'tags',
      headerName: 'Tags',
      valueGetter: (params) => params.data.tags.join(', '), // Concatenate tags into a string
      filter: true,
    },
    {
      field: 'reactions',
      headerName: 'Reactions',
      valueGetter: (params) => `Likes: ${params.data.reactions.likes}, Dislikes: ${params.data.reactions.dislikes}`,
      filter: true,
    },
    { field: 'views', headerName: 'Views', sortable: true, filter: true },
    { field: 'userId', headerName: 'User ID', sortable: true, filter: true },
  ]);

  const pagination = true;

  const paginationPageSizeSelector = [10, 20, 30];

  return (
    <>
      <div
        style={{ height: 700 }}
      >
        <AgGridReact
          rowData={data}
          columnDefs={colDefs}
          rowSelection="multiple"
          pagination={pagination}
          paginationPageSizeSelector={paginationPageSizeSelector}
          theme={myTheme}
          paginationPageSize={10}
          rowHeight={50}
          suppressColumnMoveAnimation={true}
          enableCellTextSelection={true}
          ensureDomOrder={true}

        />
      </div>
    </>
  );
}

export default App;
