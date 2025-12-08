import { Hazaksus } from './components/hazaksus'

export default function LoadingPage() {
  return (
    <div className="dark h-screen w-screen flex justify-center">
      <div>
        <Hazaksus variant="loading" />
      </div>
    </div>
  )
}
