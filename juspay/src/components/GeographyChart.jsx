import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../themes";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Coordinates and values for the locations
  const locations = [
    { id: "New York", coordinates: [-74.006, 40.7128], value: 72000 },
    { id: "San Francisco", coordinates: [-122.4194, 37.7749], value: 39000 },
    { id: "Sydney", coordinates: [151.2093, -33.8688], value: 25000 },
    { id: "Singapore", coordinates: [103.8198, 1.3521], value: 61000 },
  ];

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <ResponsiveChoropleth
        data={[]}
        features={geoFeatures.features}
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
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey[100],
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
        renderCustomLayer={({ projection }) => {
          return locations.map((location, index) => {
            const [x, y] = projection(location.coordinates) || [0, 0];
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r={4}
                fill="red"
                stroke="white"
                strokeWidth={1.5}
                style={{ pointerEvents: 'none' }} // Make sure circles don't block interaction
              />
            );
          });
        }}
      />
    </div>
  );
};

export default GeographyChart;
