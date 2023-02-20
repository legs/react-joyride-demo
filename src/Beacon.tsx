import { forwardRef } from "react";
import { BeaconRenderProps } from "react-joyride";
import { Box } from '@mui/material';

const Beacon = forwardRef<HTMLAnchorElement, BeaconRenderProps>((props, ref) => {
    return <Box width={20} height={20} bgcolor="blue" ref={ref} {...props} />;
})

export default Beacon;