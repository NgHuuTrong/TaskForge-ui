import { useState } from 'react';
import DarkModeToggle from '../../ui/DarkModeToggle';
import CheckBox from '../../ui/CheckBox';
import ButtonImage from '../../ui/ButtonImage';

function ExampleTest() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <DarkModeToggle />
      <CheckBox size="1rem" checked={checked} onChange={() => setChecked((prev) => !prev)}>
        Test
      </CheckBox>

      <div className="w-[280px]">
        <ButtonImage
          url="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/720x960/e06eb3ab5bd0f8ab762098b7aa42cb1d/photo-1696144706485-ff7825ec8481.jpg"
          to="/"
          title="Example Project"
          subscription="Example subscription"
        />
      </div>
    </>
  );
}

export default ExampleTest;
