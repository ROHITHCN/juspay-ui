import { Box, useTheme,Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../themes";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import TopSellingProducts from "../../components/TopSelling";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px" >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Ecommerce" subtitle="dash"/>
            </Box>
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            >
            <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="12px"
        >
            <StatBox
            title="Customers"
            subtitle="3781"
            increase="+11.01%"
            isIncrease={true}
            />
            </Box>
            <Box
            gridColumn="span 3"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            >
                <StatBox
                title="Orders"
                subtitle="1219"
                increase="-0.03%"
                isIncrease={false}
                />
            </Box>
            <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            >
            <BarChart/>
            </Box>
            <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="12px"
        >
            <StatBox
            title="Revenue"
            subtitle="$695"
            increase="+15.03%"
            isIncrease={true}
            />
            </Box>
            <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="12px"
        >
            <StatBox
            title="Growth"
            subtitle="30.1%"
            increase="+6.08%"
            isIncrease={true} 
            />
            </Box>
            <Box
            gridColumn="span 9"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            >
            <LineChart/>
            </Box>
            <Box
  gridColumn="span 3"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  sx={{
    height: '300px',  // Increased height to give more space for the chart and legend
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  }}
  borderRadius="12px"
>
  <GeographyChart isDashboard={true} />
</Box>


            <Box
            gridColumn="span 9"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            >
            <TopSellingProducts/>
            </Box>
            <Box
            gridColumn="span 3"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            >
            <PieChart/>
            </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;