import Head from 'next/head'
import {useRouter} from 'next/router'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import  Paper   from '@mui/material/Paper'
import Pagination from '@mui/material/Pagination'
import  Typography  from '@mui/material/Typography'
import { placeType } from '../types/placeType'
import {FilterForm} from './filterForm'

export function DataTable({ places }: placeType) {
  const { data, from, to, total, current_page, last_page } = places
  const router=useRouter()
  function changePage(e: any, value: number) {
    const currentURL = router.asPath.split('?')[0]
 
  router.push(`${currentURL}?page=${value}`)
     }
    

    return (
        <>
    <FilterForm/>
 <main style={{marginTop:'1rem'}}>
          <Typography>{from} to {to} of {total }</Typography>
        <TableContainer component={Paper} >
        <Table >
            <TableHead>
              <TableRow>
               <TableCell>Name</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>County</TableCell>
                <TableCell>Country</TableCell>
                  <TableCell>Postcode</TableCell>
                    <TableCell>area type</TableCell>
                <TableCell>place type</TableCell>
              </TableRow>
            </TableHead>
<TableBody>
{data.map(({name_1,region,
county_unitary,country,postcode_district,local_type,type},i) => {
       
  return <TableRow key={i}>
    <TableCell>{name_1}</TableCell>
    <TableCell>{region}</TableCell>
    <TableCell>{county_unitary}</TableCell>
    <TableCell>{country}</TableCell>
    <TableCell>{postcode_district}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>{local_type}</TableCell>
   </TableRow>
     })}
 </TableBody>
   </Table>
        </TableContainer>
        <Paper sx={{position:'sticky',bottom:0,right:0,display:'flex',justifyContent:'center',padding:'1rem 0 1rem 0'}}>
          <Pagination page={current_page||1} count={last_page} onChange={changePage} />
        </Paper>
            </main>
                 </>
  )
}