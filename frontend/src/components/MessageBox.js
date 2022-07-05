import { Alert } from 'reactstrap';
export default function MessageBox(props) {
  return <Alert color={props.altType}>{props.children}</Alert>;
}
