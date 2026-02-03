import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

function CustomDropdown() {
  return (
    <div className="d-flex flex-wrap gap-2">
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
          <SplitButton
            key={variant}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton>
        )
      )}
    </div>
  );
}

export default CustomDropdown;
