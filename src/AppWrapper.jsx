import { useNavigation , Outlet} from "react-router-dom"
import { Loader } from "./components/loader/Loader";

export const AppWrapper = () => {
  const {state} = useNavigation();

  if (state === 'loading') {
    return <Loader/>
  }

  return <Outlet/>
} 