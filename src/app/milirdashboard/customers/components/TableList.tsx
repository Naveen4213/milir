'use client';
import React, { useState} from 'react';
import DataTable  from "~/core/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
 
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};
 
const TableList = () => {
  const columns: ColumnDef<User>[] = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Phone',
      accessorKey: 'phone',
    },
  ];
 
  const data = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      phone: '098-765-4321',
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
      phone: '111-222-3333',
    },
    {
      id: 4,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bobsmith@example.com',
      phone: '444-555-6666',
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Brown',
      phone: '777-888-9999',
      email: 'charliebrown@exmaple.com',
    },
    {
      id: 6,
      firstName: 'John',
      lastName: 'Smith',
      phone: '123-456-7890',
      email: 'johnsmith@example.com',
    },
  ];
 
  const [pageIndex, setPageIndex] = useState(0);
 
  const perPage = 2;
  const total = data.length;
  const pageCount = Math.ceil(total / perPage);
  const paginatedData = data.splice(pageIndex * perPage, perPage);
 
  return (
    <DataTable
      onPaginationChange={(pagination) => {
        setPageIndex(pagination.pageIndex);
      }}
      pageIndex={pageIndex}
      pageCount={pageCount}
      data={paginatedData}
      columns={columns}
    />
  );
}

export default TableList;