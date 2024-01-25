import AllTabs from "./AllTabs";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";

function Tabs() {
  const table = [
    {
      label: "Nike",
      content: <TabOne />,
    },
    {
      label: "Nike Jordan",
      content: <TabTwo />,
    },
    {
      label: "Nike 2",
      content: <TabThree />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <AllTabs onChange={handleChange} table={table} />;
}

export default Tabs;
