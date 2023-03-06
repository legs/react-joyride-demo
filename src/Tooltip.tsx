import { TooltipRenderProps } from "react-joyride";
import { Box } from "@mui/material";

const Tooltip = ({
    backProps,
    continuous,
    index,
    isLastStep,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
  }: TooltipRenderProps) => {
    return (
      <></>
      // <Box
      //   {...tooltipProps}
      //   border={0}
      //   maxWidth={420}
      //   minWidth={290}
      //   overflow="hidden"
      //   radius="md"
      //   variant="white"
      // >
      //   <Box padding="md">
      //     {step.title && (
      //       <H3 mb="md" variant="primary">
      //         {step.title}
      //       </H3>
      //     )}
      //     {step.content && <Box>{step.content}</Box>}
      //   </Box>
      //   <Box padding="xs" shade="lightest" variant="primary">
      //     <Spacer distribution="space-between">
      //       {!isLastStep && (
      //         <Button {...skipProps} size="sm">
      //           <FormattedMessage id="skip" />
      //         </Button>
      //       )}
      //       <Spacer>
      //         {index > 0 && (
      //           <Button {...backProps} size="sm">
      //             <FormattedMessage id="back" />
      //           </Button>
      //         )}
      //         <Button {...primaryProps} size="sm">
      //           <FormattedMessage id={continuous ? 'next' : 'close'} />
      //         </Button>
      //       </Spacer>
      //     </Spacer>
      //   </Box>
      // </Box>
    );
  }