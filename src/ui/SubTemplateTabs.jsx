import { useSelector } from "react-redux";
import SidebarTab from "./SidebarTab";
import { useEffect, useState } from "react";

const subTemplateTabs = [
    {
        title: 'Business',
        key: 'business'
    },
    {
        title: 'Design',
        key: 'design'
    },
    {
        title: 'Education',
        key: 'education',
    },
    {
        title: 'Engineering',
        key: 'engineering'
    },
]

function SubTemplateTabs() {
    const showSubTemplateTabs = useSelector(state => state.sidebar.showSubTemplateTabs);
    const [selectedTab, setSelectedTab] = useState(null);

    useEffect(function () {
        if(!showSubTemplateTabs)
            setSelectedTab(false);
    }, [showSubTemplateTabs])

    if (!showSubTemplateTabs) return null;

    return <div className="mt-2">
        {
            subTemplateTabs.map(tab => <SidebarTab
                to='/'
                title={tab.title}
                type='sub-templates'
                key={tab.key}
                selected={selectedTab === tab.key}
                onClick={() => setSelectedTab(tab.key)}
            />)
        }
    </div>
}

export default SubTemplateTabs;