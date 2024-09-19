import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../themes";
import { useTheme } from "@mui/material";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Updated data for "Total Sales"
  const data = [
    { id: "Direct", label: "Direct", value: 300.56 },
    { id: "Affiliate", label: "Affiliate", value: 135.13 },
    { id: "Sponsored", label: "Sponsored", value: 154.02 },
    { id: "E-mail", label: "E-mail", value: 48.96 },
  ];

  // Calculate total value
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false} // Ensure arc labels are not displayed
      tooltip={({ datum }) => {
        const percentage = ((datum.value / totalValue) * 100).toFixed(2);
        return (
          <div
            style={{
              padding: "5px",
              background: colors.grey[900],
              color: colors.grey[100],
            }}
          >
            <strong>{datum.label}:</strong> {percentage}%
          </div>
        );
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row", // Set legend direction to horizontal
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right", // Change to horizontal layout
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
