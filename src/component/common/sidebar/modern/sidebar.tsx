// Modern style has no sidebar - nav lives inline in the header instead.
// This component only exists to satisfy the sidebar registry pattern and
// is never mounted (App only renders <Sidebar /> when styleId === 'minimal').
export default function Sidebar() {
  return null;
}
