let s = React.string

@react.component
let make = () => {
  <nav className="w-full py-4 px-8 bg-gray-200 flex justify-between items-center">
    <h1 className="text-3xl bg-blue-400 text-white rounded shadow-md py-2 px-4"> {s("Logo")} </h1>
    <div className="font-mono text-sm">
      <ul className="flex items-center">
        {React.array(
          ["About", "Contact"]->Belt.Array.mapWithIndex((index, text) =>
            <li key={index->Belt.Int.toString} className="mx-2 hover:text-blue-400"> {text->s} </li>
          ),
        )}
      </ul>
    </div>
  </nav>
}
