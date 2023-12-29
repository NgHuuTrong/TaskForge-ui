import SidebarTab from './SidebarTab';

const subTemplateTabs = [
  {
    title: 'Business',
    key: 'business',
  },
  {
    title: 'Design',
    key: 'design',
  },
  {
    title: 'Education',
    key: 'education',
  },
  {
    title: 'Engineering',
    key: 'engineering',
  },
];

function SubTemplateTabs({ showSubTabs }) {
  if (!showSubTabs) return null;

  return (
    <div className="mt-2">
      {subTemplateTabs.map((tab) => (
        <SidebarTab to="/" title={tab.title} type="sub-templates" key={tab.key} />
      ))}
    </div>
  );
}

export default SubTemplateTabs;
