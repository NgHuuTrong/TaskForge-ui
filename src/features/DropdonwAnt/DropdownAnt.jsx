import DropdownWorkspaces from './DropdownWorkspaces';
import DropdownInfo from './DropdownInfo';
import DropdownStarred from './DropdownStarred';
import DropdownSample from './DropdownSample';
import DropdownRecently from './DropdownRecently';
import DropdownCreate from './DropdownCreate';

const DropdownAnt = ({ type, title, items }) => {
  
  const DropdownComponent =
    type === 'workspaces' ? (
      <DropdownWorkspaces items={items} title={title} />
    ) : type === 'info' ? (
      <DropdownInfo />
    ) : type === 'starred' ? (
      <DropdownStarred items={items} title={title} />
    ) : type === 'sample' ? (
      <DropdownSample items={items} title={title} />
    ) : type === 'recently' ? (
      <DropdownRecently items={items} title={title} />
    ) : type === 'create' ? (
      <DropdownCreate title={title} />
    ) : (
      <></>
    );

  return <>{DropdownComponent}</>;
};

export default DropdownAnt;
