import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

export default function BottomNav() {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
            <BottomNavigationAction label="Blog" icon={<ArticleIcon />} />
        </BottomNavigation>
    )
}