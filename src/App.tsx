import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Joyride, { BeaconRenderProps} from "react-joyride";
import Beacon from "./Beacon";

const App = () => {
  const state = {
    steps: [
      {
        target: '.tour-step1',
        content: 'This is my awesome feature!',
      },
      {
        target: '.tour-step2',
        content: 'This another awesome feature!',
      },
      {
        target: '.tour-step3',
        content: 'Jam packed with awesome features!',
      },
    ]
  };

  const { steps } = state;
  return (
    <div className="App">
      <Box>
        <Button variant="contained" className="tour-step1">Click Me NOW</Button>
        <Button variant="contained" className="tour-step3">And then Click Me!</Button>
        <Button variant="contained" className="tour-step2">Who dares clicks...</Button>
      </Box>
      <Joyride
        steps={steps}
        // beaconComponent={Beacon as React.ElementType<BeaconRenderProps>}
        styles={{
          options: {
            arrowColor: 'grey',
            backgroundColor: 'grey',
            primaryColor: 'purple',
            textColor: 'white',
            zIndex: 1000,
          }
        }}
        continuous
        disableOverlay
        showProgress
        showSkipButton
      />
    </div>
  );
}

export default App;
