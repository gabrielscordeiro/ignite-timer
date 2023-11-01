import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { HistoryContainer, HistoryList, Status } from './styles.ts'
import { CyclesContext } from '../../contexts/CyclesContext.tsx'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Completed</Status>
                  )}

                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrupted</Status>
                  )}

                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status statusColor="yellow">In progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
