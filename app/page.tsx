import Timer from "./_components/timer";

export default function Home() {
  return (
    <main className="my-auto mx-auto flex flex-col overflow-hidden min-h-screen bg-slate-900">
      <div className="flex">
        <div>
          <h1>Programme name</h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 min-h-10 p-2">
          <Timer />
        </div>
        <div className="flex-[2] min-h-10 p-2 bg-green-700">a</div>
        <div className="flex-1 min-h-10 p-2 bg-blue-700"></div>
      </div>
    </main>
  );
}
