import Button from 'react-bootstrap/Button';

function CustomButton({ text, variant }) {
  return (
    <Button variant={variant} className="me-2 mb-2">
      {text}
    </Button>
  );
}

export default CustomButton;
