module App = {
  @react.component
  let make = () => {
    <Nav />
  }
}

let run = () => {
  switch ReactDOM.querySelector("#reactRoot") {
  | Some(root) => ReactDOM.render(<div> <App /> </div>, root)
  | None => ()
  }
}
