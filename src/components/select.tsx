import { Select as MuiSelect } from "@mui/material";
import MenuItem from '@mui/material/MenuItem'
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";


type selectType = {
    selectValue: string
    selectData: string[]|undefined
    valueChange: Function
    fieldValue: 'paramKey'|'paramValue'
    hasError:boolean
}

export function Select({ selectValue, selectData, valueChange,hasError,fieldValue }: selectType) {
 const LABEL_KEYS={paramKey:'filter key',paramValue:'filter value'}
    
function checkError(fieldValue:string) {
        return hasError&& !fieldValue
    }

    return (<FormControl fullWidth>
        <InputLabel id={fieldValue}>{LABEL_KEYS[fieldValue]}</InputLabel>
           <MuiSelect  label={LABEL_KEYS[fieldValue]} labelId={fieldValue}  error={checkError(selectValue)} onChange={(e) => valueChange(e.target.value, fieldValue)} value={selectValue} >
            { selectData?.map((value,i) => { return <MenuItem key={i} value={value}>{value }</MenuItem>})}
        </MuiSelect>
        {hasError&&!selectValue&&<FormHelperText style={{color:'red'}}>{`${LABEL_KEYS[fieldValue]} is required`}</FormHelperText>}
    
    </FormControl>)
   
}