import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { FILTER_SUB_DATA, AREA_TYPE_DATA } from '../data/filterData'
import {Select} from './select'

type selectInputType = {
 valueChange: Function
    data: string[] | undefined,
    previousParam: { paramKey: string, paramValue: string }
    filterParam: { paramKey: string, paramValue: string }
    hasError: boolean
}

export function SelectInput({data,previousParam,valueChange,filterParam,hasError}:selectInputType) {

    const { paramKey, paramValue } = filterParam
    
    function checkError(fieldValue:string) {
        return hasError&& !fieldValue
    }

    
    function getFilterSubData() {
        const filterSubData=FILTER_SUB_DATA.get(paramKey)
    if(!previousParam?.paramKey) return filterSubData

    if(previousParam.paramKey === 'AreaType'&&paramKey ==='PlaceType') return AREA_TYPE_DATA.get(previousParam.paramValue)
    
        if (previousParam.paramKey === 'Country' && previousParam.paramValue !== 'England') return [previousParam.paramValue]
        if(previousParam.paramKey === 'PlaceType' && paramKey ==='Region'&& Array.isArray(filterSubData)) return [...filterSubData,'Wales','scotland']
        return filterSubData
    }
    

    const filterSubData=getFilterSubData()
    return <Container component='div' sx={(theme) => ({
        display: 'flex', gap: 3,
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column'
        }
    })}>
            <Select selectData={data} selectValue={paramKey} hasError={hasError} valueChange={valueChange} fieldValue='paramKey'/>
        {paramKey === 'Postcode' ? <TextField fullWidth error={checkError(paramValue)} value={paramValue} onChange={(e) => valueChange(e.target.value, 'paramValue')} helperText={hasError&&!paramValue?'postcode is required':''} /> : 
      <Select selectData={filterSubData} selectValue={paramValue} hasError={hasError} valueChange={valueChange} fieldValue='paramValue' />
          
        }
        
       
     
     
</Container>
}