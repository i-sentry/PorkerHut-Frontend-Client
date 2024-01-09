import { useTable } from "react-table";
type TableComponentProps = {
  columns: any[]; // Define column types as needed
  data: any[]; // Define data types as needed
};

const OtherOrdersTable: React.FC<TableComponentProps> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="cont w-10/12 h-[500px] mx-auto overflow-y-auto bg-teal-100 bg-opacity-30 backdrop:blur-2xl">
      <table className=" w-full h-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="sticky top-0 left-0"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="p-4 bg-teal-950 text-sm text-white text-left"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="hover:bg-white hover:bg-opacity-50 duration-300 text-gray-50 hover:text-teal-900"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className="p-4 bg-[55608f] text-left text-sm"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OtherOrdersTable;
