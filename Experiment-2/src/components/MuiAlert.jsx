import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function MuiAlert({ message, severity }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity || 'info'}>{message}</Alert>
    </Stack>
  );
}

export default MuiAlert;
