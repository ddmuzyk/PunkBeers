import { useNavigation , Outlet} from "react-router-dom"

export const AppWrapper = () => {
  const {state} = useNavigation();

  if (state === 'loading') {
    return <div>Loading...</div>
  }

  return <Outlet/>
} 