import DropdownWorkspaces from './DropdownWorkspaces';
import DropdownInfo from './DropdownInfo';
import DropdownStarred from './DropdownStarred';
import DropdownSample from './DropdownSample';
import DropdownRecently from './DropdownRecently';
import DropdownCreate from './DropdownCreate';
import DropdownNotification from './DropdownNotification';

const DropdownAnt = ({ type, items, title }) => {
  const DropdownComponent =
    type === 'workspaces' ? (
      <DropdownWorkspaces items={items} title={title} />
    ) : type === 'info' ? (
      <DropdownInfo items={items} title={title} />
    ) : type === 'starred' ? (
      <DropdownStarred items={items} title={title} />
    ) : type === 'sample' ? (
      <DropdownSample items={items} title={title} />
    ) : type === 'recently' ? (
      <DropdownRecently items={items} title={title} />
    ) : type === 'create' ? (
      <DropdownCreate title={title} />
    ) : type === 'noti' ? (
      <DropdownNotification items={items} />
    ) : (
      <></>
    );

  return <>{DropdownComponent}</>;
};

export default DropdownAnt;