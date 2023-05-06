import { render ,screen , cleanup} from "@testing-library/react";
import Todo from "../todo";
import renderer from "react-test-renderer"

let data=[
    {
      name:"first Todo",
      id:1,
      completed:false
      
    }
  ]
  afterEach(()=>{
    cleanup()
  })
test('should_render_todo-1', () => {
    render(<Todo data={data} />);
    const todoelement=screen.getByTestId('todo-1');
    expect(todoelement).toBeInTheDocument();
    expect(todoelement).toHaveTextContent(1)
})
test('should_render_todo-2', () => {
    render(<Todo data={data} />);
    const todoelement=screen.getByTestId('todo-2');
    expect(todoelement).toBeInTheDocument();
    expect(todoelement).toHaveTextContent("first Todo")
})
test('should_render_todo-3', () => {
    render(<Todo data={data} />);
    const todoelement=screen.getByTestId('todo-3');
    expect(todoelement).toBeInTheDocument();
    // expect(todoelement).toHave(false)
})
test('matches-snapshot', () => {
    const tree=renderer.create(<Todo data={data}/>).toJSON()
    console.log(tree)
    expect(tree).toMatchSnapshot()
})