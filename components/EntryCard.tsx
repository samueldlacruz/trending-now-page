import { hover } from "../utils/twu"

const EntryCard = () => {
    return (
        <div className={`border-slate-200/50 hover:cursor-pointer bg-slate-800/50 hover:scale-[1.01] hover:shadow-slate-800/70 hover:bg-slate-800/70 m-2 border rounded-sm px-3 py-4 shadow-md duration-100 ease-in`}>
            <h3 className="font-semibold text-white/70">New Title</h3>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            <p className="text-white w-full text-xs mt-4 flex justify-between">
                <span><strong>Source:</strong> HackerNews</span>
                <time className="italic" dateTime="2008-02-14 20:00">2008-02-14 20:00</time>
            </p>
        </div>
    )
}

export default EntryCard