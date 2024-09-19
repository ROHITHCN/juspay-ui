import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../themes";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import LightModeIcon from '@mui/icons-material/LightMode';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase"
const Topbar =()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <IconButton>
          <StarBorderIcon />
      </IconButton>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            <LightModeIcon/>
        </IconButton>
        <IconButton>
          <RestoreIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <FeaturedPlayListIcon />
        </IconButton>
      </Box>
      </Box>
        </>
    )
}
export default Topbar;