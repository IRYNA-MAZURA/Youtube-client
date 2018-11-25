// import '../style/css.css';
// import '../style/reset.css';
import insertSearchForm from './insertSearchForm';
import insertVideoSection from './insertVideoSection';
import insertDots from './insertNavigationDots';
import onResizeWindow from './onResizeWindow';

insertSearchForm();
insertVideoSection();
insertDots();

window.onresize = () => onResizeWindow();
