import CustomButton from './Button';

function ButtonsSection() {
  return (
    <div className="p-4 bg-dark rounded">
      <h5 className="text-white mb-3">Buttons</h5>

      <CustomButton text="Primary" variant="primary" />
      <CustomButton text="Secondary" variant="secondary" />
      <CustomButton text="Success" variant="success" />
      <CustomButton text="Warning" variant="warning" />
      <CustomButton text="Danger" variant="danger" />
      <CustomButton text="Info" variant="info" />
      <CustomButton text="Light" variant="light" />
      <CustomButton text="Dark" variant="dark" />
      <CustomButton text="Link" variant="link" />
    </div>
  );
}

export default ButtonsSection;
