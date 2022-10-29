import { DashboardProvider } from '../../StateManagement/Reducers/DashboardReducer';
import DashboardScreen from './Views/DashboardScreen';


const DashboardComponents = ({ component }) => {
    return (
        <DashboardProvider>
            {component === "base" && <DashboardScreen />}
            {/* {component === "list" && <XX />} */}
        </DashboardProvider>
    )
}

export default DashboardComponents;