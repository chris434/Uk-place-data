import {useRouter} from 'next/router'
import { useState,FormEvent} from 'react'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import  Typography  from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { SelectInput } from './selectInput'
import { getClientJoinedParams } from '../utils/params'
import { getFilterData } from '../utils/filterData'
import { CAN_ADD_FILTER_INDEXES, FILTER_DATA } from '../data/filterData'
import {CollapseBnt}from './collapseBnt'

type filterParams = {
     paramKey: string, paramValue: string
}

export function FilterForm() {
    const router = useRouter()
   const {query}=router

    const mapRouteData=Array.isArray(query.filter)? getMapRouteData(query.filter):[{ paramKey: '', paramValue: '' }]
   
    const [filterParams, setFilterParams] = useState(mapRouteData)
    const [paramKeyIndex, setKeyIndex] = useState<boolean | number>(query?.filter ? getIndex(mapRouteData[mapRouteData.length - 1].paramKey) : false)
    const [hasError, setHasError] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
   
    function getMapRouteData(routeData:string[]) {
        let mappedFilterData:filterParams[] = []
        for (let i = 0; i < routeData.length; i+=2) {
           mappedFilterData=[...mappedFilterData,{paramKey: routeData[i], paramValue: routeData[i+1]}]
        }
        console.log(mappedFilterData)
       return mappedFilterData
    }

    function onSearch(e:FormEvent<HTMLElement>) {
        e.preventDefault()

        const hasError = filterParams.some(({ paramKey, paramValue })=> !paramKey|| !paramValue)
       
       if(hasError) return setHasError(true)
       setHasError(false)

        const joinedParams = getClientJoinedParams(filterParams)

        router.push(`/data/${joinedParams}`)
    }
    
    function addType() {
        const newFilterParam= [...filterParams, {paramKey:'',paramValue:''}]
        setFilterParams(newFilterParam)
        setKeyIndex(false)
    }
    function removeType(index=-1) {
        const newFilterParam = filterParams.slice(0, index)
        console.log(newFilterParam)
        setFilterParams(newFilterParam)

        const lastParam= newFilterParam[newFilterParam.length-1]
        changeKeyIndex(lastParam.paramKey)
    }

    function  changeKeyIndex(value:string) {
                 const paramKeyIndex = getIndex(value)
                 setKeyIndex(paramKeyIndex)
    }

    function getIndex(value:string) {
        const paramKeyIndex = FILTER_DATA.indexOf(value)
        return paramKeyIndex
    }

    function checkAddFilter(paramKeyIndex: number | boolean) {
        if (typeof paramKeyIndex === 'number') {
           return   CAN_ADD_FILTER_INDEXES.get(paramKeyIndex) 
        }
      return false
    }
    function clear() {
        setFilterParams([{ paramKey: '', paramValue: '' }])
    }

    return <Paper elevation={3} sx={{ position: 'sticky', top: 0,right:0 }}>
        <header style={{padding:'0.5rem',display:'flex',justifyContent: 'space-between'}}>
            <Typography variant='h6' component='h1'>Uk place data</Typography>
            <CollapseBnt collapsed={collapsed} setCollapsed={setCollapsed } />
  
        </header>
        <Collapse in={!collapsed}>
                  <hr />
<form onSubmit={onSearch} style={{ margin:'0 15% 20px 15%' ,width:'70%',padding:'2rem 0 1rem 0'}}>
        <div style={{display: 'flex', flexDirection:'column',gap: 20}}>
{filterParams.map((filterParam, i: number) => {
            const { paramKey, paramValue } = filterParam
            console.log(filterParam)
            
            const previousParam = filterParams[i - 1]
          
            const filteredData = getFilterData(previousParam?.paramKey, i)  
                console.log(previousParam)

            return  <SelectInput key={i} data={filteredData} previousParam={previousParam}  filterParam={filterParam} hasError={hasError} valueChange={(value:string,field:'paramKey'|'paramValue') => {
                const newFilterParams = [...filterParams]
                
                if (field === 'paramKey' && value !== filterParams[i].paramKey) {
                    newFilterParams[i].paramValue = ''
                }
                  newFilterParams[i][field] = value
                
                setFilterParams(newFilterParams)

                if (field === 'paramKey') {
                 changeKeyIndex(value)
                }
                
                if (field === 'paramKey'&& i !== filterParams.length-1) {
                 removeType(i+1)
                }
                
}}  />
        })}
        </div>
        
        <Container component='div' sx={(theme) => ({
         display: 'flex', gap: 0.5,
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column'
        }
        })}>
 {checkAddFilter(paramKeyIndex)&& <Button onClick={addType}>add filter</Button>}
                    {filterParams.length > 1 && <Button onClick={() => removeType()}>remove filter</Button>}
                    <Button onClick={clear}>clear</Button>
        <Button type='submit'>Search</Button>
        </Container>
     
     
            </form>
            </Collapse>
    </Paper> 
}

