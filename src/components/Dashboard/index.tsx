import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import {Container} from './styles'

export function Dashboard() {
    return (
        <Container className="bg-dark">
            <Summary></Summary>
            <TransactionsTable />
        </Container>
    );
}