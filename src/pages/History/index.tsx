import { HistoryContainer, HistoryList } from './styles.ts'

export const History = () => {
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
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
