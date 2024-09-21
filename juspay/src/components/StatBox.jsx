import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../themes";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StatBox = ({ title, subtitle, icon, increase, isIncrease }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.grey[100] }}>
            {subtitle}
          </Typography>
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography
            variant="h5"
            sx={{ color: colors.grey[100], display: 'flex', alignItems: 'center' }}
          >
            {increase}
            {isIncrease ? (
              <ArrowUpwardIcon sx={{ color: colors.greenAccent[600], ml: 1 }} />
            ) : (
              <ArrowDownwardIcon sx={{ color: colors.redAccent[600], ml: 1 }} />
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
