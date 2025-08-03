import { Header } from '../../../components/Index'

const Dashboard = () => {
  const user = {name: "Marce"}

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'}`}
        description ="Track activity, trends and popular destinations in real time"
      />

      Dashboard Content Page
    </main>
  )
}

export default Dashboard