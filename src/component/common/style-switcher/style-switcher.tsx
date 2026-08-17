import { useStyle } from '@context/global/style-context';

export default function StyleSwitcher() {
  const { styleId, availableStyles, switchStyle } = useStyle();

  return (
    <select aria-label="Style" value={styleId} onChange={(e) => switchStyle(e.target.value)}>
      {availableStyles.map((s) => (
        <option key={s.id} value={s.id}>
          {s.name}
        </option>
      ))}
    </select>
  );
}
