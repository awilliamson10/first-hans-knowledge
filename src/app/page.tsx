export default function Home() {
  return (
    <div className="prose max-w-none">
      <h1>Welcome to First Hans Knowledge</h1>
      <p>Your comprehensive guide to Lost City RuneScape 2 (2004).</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border rounded-lg p-6">
          <h2 className="mt-0">Skills</h2>
          <p>Level up efficiently with our detailed skill guides.</p>
          <a href="/skills" className="text-blue-600 hover:underline">Browse Skills →</a>
        </div>
        <div className="border rounded-lg p-6">
          <h2 className="mt-0">Quests</h2>
          <p>Complete every quest with our step-by-step walkthroughs.</p>
          <a href="/quests" className="text-blue-600 hover:underline">Browse Quests →</a>
        </div>
      </div>
    </div>
  )
}