export function Button({ children, ...props }) {
    return <button {...props} style={{ padding: '0.5rem 1rem' }}>{children}</button>;
  }
  