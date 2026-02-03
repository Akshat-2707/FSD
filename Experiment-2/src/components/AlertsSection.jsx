import MuiAlert from './MuiAlert';

function AlertsSection() {
  return (
    <div className="p-4 bg-light rounded my-4">
      <h5 className="mb-3">Alerts</h5>

      <MuiAlert message="This is a success alert!" severity="success" />
      <MuiAlert message="This is an info alert!" severity="info" />
      <MuiAlert message="This is a warning alert!" severity="warning" />
      <MuiAlert message="This is an error alert!" severity="error" />
    </div>
  );
}

export default AlertsSection;
