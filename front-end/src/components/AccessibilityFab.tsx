import { useA11yPrefs } from "../hooks/useA11yPrefs";

export default function AccessibilityFab(){
  const a11yPrefs = useA11yPrefs();
  return (
    <div>
      {/* Example usage of a11yPrefs */}
      <pre>{JSON.stringify(a11yPrefs, null, 2)}</pre>
    </div>
  );
}
