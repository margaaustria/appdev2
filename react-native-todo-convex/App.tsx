import { ConvexProvider, ConvexReactClient } from "convex/react";
import TodoScreen from "./screens/TodoScreen";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL ?? "http://192.168.1.39:3210";
console.log("Convex URL:", convexUrl);

const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <TodoScreen />
    </ConvexProvider>
  );
}
