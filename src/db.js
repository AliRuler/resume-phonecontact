'use strict';
import { AvatarCell, SelectColumnFilter, StatusPill, formButtons } from './components/Table/Table'  // new

export const getData = [
    {
      name: 'Jane Cooper',
      tell: "0912123456789",
      email: 'jane.cooper@example.com',
      address: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'PUBLIC',
      role: 'partner',
      action:"del",
      age: 27,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/6.svg',
    },
    {
      name: 'Cody Fisher',
      tell: "0912123456789",
      email: 'cody.fisher@example.com',
      address: 'Product Directives Officer',
      department: 'Intranet',
      status: 'PUBLIC',
      role: 'family',
      action:"del",
      age: 43,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/5.svg',
    },
    {
      name: 'Esther Howard',
      tell: "0912123456789",
      email: 'esther.howard@example.com',
      address: 'Forward Response Developer',
      department: 'Directives',
      status: 'PUBLIC',
      role: 'friend',
      age: 32,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/4.svg',
    },
    {
      name: 'Jenny Wilson',
      tell: "0912123456789",
      email: 'jenny.wilson@example.com',
      address: 'Central Security Manager',
      department: 'Program',
      status: 'PUBLIC',
      role: 'friend',
      action:"del",
      age: 29,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/1.svg',
    },
    {
      name: 'Kristin Watson',
      tell: "0912123456789",
      email: 'kristin.watson@example.com',
      address: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'FAVORITE',
      role: 'family',
      action:"del",
      age: 36,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/2.svg',
    },
    {
      name: 'Cameron Williamson',
      tell: "0912123456789",
      email: 'cameron.williamson@example.com',
      address: 'Internal Applications Engineer',
      department: 'Security',
      status: 'FAVORITE',
      role: 'friend',
      action:"del",
      age: 24,
      imgUrl: 'https://avatars.dicebear.com/api/avataaars/3.svg',
    },
  ]

export const columns = [
  {
    Header: "Name",
    accessor: 'name',
    Cell: AvatarCell,
    imgAccessor: "imgUrl",
    emailAccessor: "email",
  },
  {
    Header: "Phone",
    accessor: 'tell',
  },
  {
    Header: "Address",
    accessor: 'address',
  },
  {
    Header: "Status",
    accessor: 'status',
    Cell: StatusPill
  },
  {
    Header: "Age",
    accessor: 'age',
  },
  {
    Header: "Role",
    accessor: 'role',
    Filter: SelectColumnFilter,  // new
    filter: 'includes',
  },
  {
    Header: "Actions",
    accessor: "idContact",
    id: 'edit',
    Cell: formButtons

  },
];