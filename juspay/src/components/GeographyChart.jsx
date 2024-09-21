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

  // Example data to be mapped to countries
  const data = [
    { id: "USA", value: 62000 },
    { id: "AUS", value: 39000 },
    { id: "IND", value: 70000 },
    // Add more data with country IDs and values
  ];

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
  <ResponsiveChoropleth
    data={data}
    features={geoFeatures.features}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
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
    }}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    domain={[0, 100000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionScale={isDashboard ? 40 : 150}   // Reduced scale to fit better
    projectionTranslation={isDashboard ? [0.49, 0.55] : [0.5, 0.5]}  // Adjust translation
    projectionRotation={[0, 0, 0]}
    borderWidth={1.5}
    borderColor="#ffffff"
    legends={undefined}  // Remove legends for dashboard
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
            style={{ pointerEvents: 'none' }}
          />
        );
      });
    }}
  />
</div>

  );
};

export default GeographyChart;
