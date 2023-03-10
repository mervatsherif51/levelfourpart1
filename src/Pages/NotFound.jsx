import { Box, useTheme } from '@mui/material';
import Typography  from '@mui/material/Typography'
import React from 'react';

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography sx={{fontWeight: "700"}} color={theme.palette.error.main}

       variant="h5">

      There Is No Design Yet
      <br />
      <br />
      Please Try agin Later .....
      </Typography>
    </Box>
  );
}

export default NotFound;
