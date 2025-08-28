import Portfolio from '@/components/sections/Portfolio';

const Index = () => {
  console.log('Index component rendering');
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <h1 className="text-white text-4xl">Testing - If you can see this, React is working</h1>
      <Portfolio />
    </div>
  );
};

export default Index;
