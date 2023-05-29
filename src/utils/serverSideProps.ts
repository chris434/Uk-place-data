import {GetServerSideProps} from 'next'
import { getApiJoinedParams, getFirstParam } from '../utils/params'
import { params } from '../types/severSideTypes'


export async function getData({ params,query}: GetServerSideProps & params) {

    const joinedParams = getApiJoinedParams(params)
    const firstParam = getFirstParam(params?.filter)
const invalidLength=typeof params!=='undefined'&& params.filter.length % 2 !== 0
    try {
  
        if (invalidLength) {
             throw new Error('Invalid length')
         }


        const data = await fetch(`https://towns.online-tech.co.uk/api/v1${firstParam}/${joinedParams}${query?.page ? `?page=${query.page}` : ''}`)
        const result = await data.json()

        return {
            props: { places: result }
        }
    } catch (error) {
        console.log('op')
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        }
    }
}