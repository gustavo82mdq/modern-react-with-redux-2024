import useNavigation from "../hooks/use-navigation";

export default function Route({ path, children }) {
    const { currentPath } = useNavigation()

    return path === currentPath ? children : null
}