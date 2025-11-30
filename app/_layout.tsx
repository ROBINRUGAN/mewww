// 路径：app/_layout.tsx
import { Stack } from 'expo-router';
import "@/global.css";
import "@/nativewind-interop";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}