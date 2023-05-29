import {GetServerSideProps} from 'next'
import { getData } from '../../utils/serverSideProps'
import { params } from '../../types/severSideTypes'
import {placeType} from '../../types/placeType'
import { DataTable } from '../../components/dataTable'


export default function Filter({ places }: placeType) {

 return (
    <>
     <DataTable places={places} />
</>
  )
}

export async function getServerSideProps(cxt:GetServerSideProps & params) {
  return getData(cxt)
}

