import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../themes";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const OrderList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id",
        headerName: "Order ID",
        headerAlign: "left",
       },
      {
        field: "name",
        headerName: "User",
        flex: 1,
        headerAlign: "left",
        cellClassName: "name-column--cell",
      },
      {
        field: "project",
        headerName: "Project",
        headerAlign: "left",
        flex: 1,
      },
      {
        field: "address",
        headerName: "Address",
        headerAlign: "left",
        flex: 1,
      },
      {
        field: "date",
        headerName: "Date",
        headerAlign: "left",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        headerAlign: "left",
        flex: 1,
      },
    ];
  
    return (
      <Box m="20px">
        <Header title="Order List"/>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }} />
        </Box>
      </Box>
    );
  };
  
  export default OrderList;