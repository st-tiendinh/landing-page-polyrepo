import { formatDate } from '@st-tiendinh/shared-utils-polyrepo';
import { Button } from './components/ui';

function App() {
  const today = new Date();

  return (
    <div style={{ padding: '50px', fontFamily: 'system-ui' }}>
      <h1>Vite App</h1>
      <p>Today is: {formatDate(today, 'long')}</p>
      <Button onClick={() => alert('Hello from Vite!')}>Click me</Button>
      <Button
        variant="secondary"
        onClick={() => console.log('Secondary button')}
      >
        Secondary Button
      </Button>
    </div>
  );
}

export default App;
