import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../themes";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Updated data for "Projections vs Actuals"
  const data = [
    { month: 'Jan', Actuals: 18, Projections: 22 },
    { month: 'Feb', Actuals: 20, Projections: 28 },
    { month: 'Mar', Actuals: 18, Projections: 22 },
    { month: 'Apr', Actuals: 22, Projections: 29 },
    { month: 'May', Actuals: 16, Projections: 19 },
    { month: 'Jun', Actuals: 21, Projections: 26 },
  ];

  return (
    <ResponsiveBar
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
      keys={["Actuals", "Projections"]} // Updated keys
      indexBy="month" // Updated indexBy
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Month", // Updated legend
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Value (in millions)", // Updated legend
        legendPosition: "middle",
        legendOffset: -40,
        tickValues: [0, 10, 20, 30], // Customized y-axis levels
        format: d => `${d}m` // Formatting y-axis labels
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return `${e.id}: ${e.formattedValue}m in month: ${e.indexValue}`;
      }}
    />
  );
};

export default BarChart;
