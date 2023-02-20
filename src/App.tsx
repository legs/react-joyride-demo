import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Joyride, { BeaconRenderProps} from "react-joyride";
import Beacon from "./Beacon";

const App = () => {
  const state = {
    steps: [
      {
        target: '.click-button',
        content: 'This is my awesome feature!',
      },
      {
        target: '.other-click-button',
        content: 'This another awesome feature!',
      },
    ]
  };

  const { steps } = state;
  return (
    <div className="App">
      <Box>
        <Button variant="contained" className="click-button">Click Me NOW</Button>
        <Button variant="contained" className="other-click-button">And then Click Me!</Button>
      </Box>
      <Joyride
        steps={steps}
        beaconComponent={Beacon as React.ElementType<BeaconRenderProps>}
      />
    </div>
  );
}

export default App;
