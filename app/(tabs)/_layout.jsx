import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";


export default function RootLayout() {
    return (
        <Tabs style={{ flex: 1 }} screenOptions={{ headerShown: false, tabBarActiveTintColor: 'coral' }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => {
                        return focused ? (
                            <Ionicons name="home" size={24} color={color} />
                        ) : (
                            <Ionicons name="home-outline" size={24} color={color} />
                        )
                    }
                }} />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => {
                        return focused ? (
                            <Ionicons name="home" size={24} color={color} />
                        ) : (
                            <Ionicons name="home-outline" size={24} color={color} />
                        )
                    }
                }} />
        </Tabs>
    )
}
