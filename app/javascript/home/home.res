module Homepage = {
  @react.component
  let make = () => {
    <h1> {React.string("Can you see me ?")} </h1>
  }
}

let react = () => {
  switch ReactDOM.querySelector("#reactRoot") {
  | Some(root) => ReactDOM.render(<div> <Homepage /> </div>, root)
  | None => ()
  }
}
