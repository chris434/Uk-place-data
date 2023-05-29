import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

type collapseBntType = {
    collapsed:boolean
    setCollapsed:Function
}

export function CollapseBnt({collapsed,setCollapsed}:collapseBntType) {
    return <Tooltip title={collapsed?'expand':'collapse'}>
        <IconButton onClick={()=>setCollapsed(!collapsed)}>
            {collapsed?<ExpandMore />:<ExpandLess/>}
        </IconButton>
    </Tooltip>
}