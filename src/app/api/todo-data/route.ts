const todoData = [
  {
    id: '1',
    description: 'this is a new task',
    isDone: false,
  },
  {
    id: '2',
    description: 'Develop the To-do list page',
    isDone: false,
  },
  {
    id: '4',
    description: 'Create the drag-and-drop function',
    isDone: false,
  },
  {
    id: '3',
    description: 'Get FTP credentials',
    isDone: true,
  },
  {
    id: '5',
    description: '',
    isDone: false,
  },
];

export function GET() {
  return new Response(JSON.stringify(todoData));
}
